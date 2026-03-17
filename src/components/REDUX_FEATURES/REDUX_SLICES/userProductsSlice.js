import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../SERVICES/axiosInstance";

// ── Error Logger ──────────────────────────────────────────────────────────────
const logError = (context, error, info = {}) => {
  console.group(`🔴 ERROR in ${context}`);
  console.error("Error:", error);
  console.log("Message:", error.response?.data?.message || error.message);
  console.log("Status:", error.response?.status);
  console.log("Info:", info);
  console.groupEnd();
};

// ── Thunks ────────────────────────────────────────────────────────────────────

// GET /products/all?page=&limit=&category=&minPrice=&maxPrice=&featured=&q=
export const fetchProducts = createAsyncThunk(
  "userProducts/fetchProducts",
  async (filters = {}, { rejectWithValue }) => {
    try {
      const queryParams = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "")
          queryParams.append(key, value);
      });
      const url = `/products/all${
        queryParams.toString() ? `?${queryParams}` : ""
      }`;
      console.log(`📦 fetchProducts → ${url}`);
      const response = await axiosInstance.get(url);
      if (!response.data.success)
        throw new Error(response.data.message || "Failed to fetch products");
      return response.data;
    } catch (error) {
      logError("fetchProducts", error, { filters });
      return rejectWithValue({
        message: error.response?.data?.message || "Failed to load products",
        status: error.response?.status,
      });
    }
  }
);

// GET /products/category/:slug?page=&limit=
export const fetchProductsByCategory = createAsyncThunk(
  "userProducts/fetchProductsByCategory",
  async ({ slug, page = 1, limit = 12 }, { rejectWithValue }) => {
    try {
      console.log(
        `📂 fetchProductsByCategory → slug=${slug} page=${page} limit=${limit}`
      );
      const response = await axiosInstance.get(
        `/products/category/${slug}?page=${page}&limit=${limit}`
      );
      if (!response.data.success)
        throw new Error(response.data.message || "Failed to fetch products");
      return response.data;
    } catch (error) {
      logError("fetchProductsByCategory", error, { slug, page, limit });
      return rejectWithValue({
        message: error.response?.data?.message || "Failed to load products",
        status: error.response?.status,
      });
    }
  }
);

// GET /products/:slug
export const fetchProductBySlug = createAsyncThunk(
  "userProducts/fetchProductBySlug",
  async (slug, { rejectWithValue }) => {
    try {
      console.log(`🔍 fetchProductBySlug → ${slug}`);
      const response = await axiosInstance.get(`/products/${slug}`);
      if (!response.data.success)
        throw new Error(response.data.message || "Product not found");
      return response.data;
    } catch (error) {
      logError("fetchProductBySlug", error, { slug });
      return rejectWithValue({
        message: error.response?.data?.message || "Failed to load product",
        status: error.response?.status,
      });
    }
  }
);

// GET /products/search?q=&page=&limit=
export const searchProducts = createAsyncThunk(
  "userProducts/searchProducts",
  async ({ query, page = 1, limit = 12 }, { rejectWithValue }) => {
    try {
      console.log(`🔎 searchProducts → q=${query} page=${page}`);
      const response = await axiosInstance.get(
        `/products/search?q=${encodeURIComponent(query)}&page=${page}&limit=${limit}`
      );
      if (!response.data.success)
        throw new Error(response.data.message || "Search failed");
      return response.data;
    } catch (error) {
      logError("searchProducts", error, { query, page });
      return rejectWithValue({
        message: error.response?.data?.message || "Search failed",
        status: error.response?.status,
      });
    }
  }
);

// GET /products/featured?limit=
export const fetchFeaturedProducts = createAsyncThunk(
  "userProducts/fetchFeaturedProducts",
  async (limit = 12, { rejectWithValue }) => {
    try {
      console.log(`⭐ fetchFeaturedProducts → limit=${limit}`);
      const response = await axiosInstance.get(
        `/products/featured?limit=${limit}`
      );
      if (!response.data.success)
        throw new Error(
          response.data.message || "Failed to fetch featured products"
        );
      return response.data;
    } catch (error) {
      logError("fetchFeaturedProducts", error, { limit });
      return rejectWithValue({
        message:
          error.response?.data?.message || "Failed to load featured products",
        status: error.response?.status,
      });
    }
  }
);

// GET /products/:slug/related?limit=
export const fetchRelatedProducts = createAsyncThunk(
  "userProducts/fetchRelatedProducts",
  async ({ slug, limit = 8 }, { rejectWithValue }) => {
    try {
      console.log(`🔗 fetchRelatedProducts → slug=${slug} limit=${limit}`);
      const response = await axiosInstance.get(
        `/products/${slug}/related?limit=${limit}`
      );
      if (!response.data.success)
        throw new Error(
          response.data.message || "Failed to fetch related products"
        );
      return response.data;
    } catch (error) {
      logError("fetchRelatedProducts", error, { slug, limit });
      return rejectWithValue({
        message:
          error.response?.data?.message || "Failed to load related products",
        status: error.response?.status,
      });
    }
  }
);

// ── Initial State ─────────────────────────────────────────────────────────────
const initialState = {
  products: [],
  featuredProducts: [],
  relatedProducts: [],
  currentProduct: null,
  pagination: {
    total: 0,
    page: 1,
    limit: 12,
    totalPages: 0,
    hasNextPage: false,
    hasPrevPage: false,
  },
  loading: {
    products: false,
    product: false,
    categoryProducts: false,
    search: false,
    featured: false,
    related: false,
  },
  error: {
    products: null,
    product: null,
    categoryProducts: null,
    search: null,
    featured: null,
    related: null,
  },
};

// ── Slice ─────────────────────────────────────────────────────────────────────
const userProductsSlice = createSlice({
  name: "userProducts",
  initialState,
  reducers: {
    clearProducts: (state) => {
      state.products = [];
      state.pagination = initialState.pagination;
    },
    clearCurrentProduct: (state) => {
      state.currentProduct = null;
    },
    clearRelatedProducts: (state) => {
      state.relatedProducts = [];
    },
    clearErrors: (state) => {
      state.error = initialState.error;
    },
  },
  extraReducers: (builder) => {
    builder

      // ── fetchProducts (all products with filters) ──────────────────────────
      .addCase(fetchProducts.pending, (state) => {
        state.loading.products = true;
        state.error.products = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading.products = false;
        state.products = action.payload.products || [];
        const p = action.payload.pagination || {};
        state.pagination = {
          total: p.total ?? action.payload.total ?? 0,
          page: p.page ?? action.payload.page ?? 1,
          limit: p.limit ?? action.payload.limit ?? 12,
          totalPages:
            p.totalPages ??
            Math.ceil((p.total ?? 0) / (p.limit ?? 12)),
          hasNextPage: p.hasNextPage ?? false,
          hasPrevPage: p.hasPrevPage ?? false,
        };
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading.products = false;
        state.error.products =
          action.payload || { message: "Failed to fetch products" };
      })

      // ── fetchProductsByCategory ────────────────────────────────────────────
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading.categoryProducts = true;
        state.error.categoryProducts = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading.categoryProducts = false;
        state.products = action.payload.products || [];
        const total = action.payload.total ?? 0;
        const page = action.payload.page ?? 1;
        const limit = action.payload.limit ?? 12;
        state.pagination = {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
          hasNextPage: page * limit < total,
          hasPrevPage: page > 1,
        };
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading.categoryProducts = false;
        state.error.categoryProducts =
          action.payload || { message: "Failed to fetch category products" };
      })

      // ── fetchProductBySlug ────────────────────────────────────────────────
      .addCase(fetchProductBySlug.pending, (state) => {
        state.loading.product = true;
        state.error.product = null;
      })
      .addCase(fetchProductBySlug.fulfilled, (state, action) => {
        state.loading.product = false;
        state.currentProduct = action.payload.product || null;
      })
      .addCase(fetchProductBySlug.rejected, (state, action) => {
        state.loading.product = false;
        state.error.product =
          action.payload || { message: "Failed to fetch product" };
      })

      // ── searchProducts ────────────────────────────────────────────────────
      .addCase(searchProducts.pending, (state) => {
        state.loading.search = true;
        state.error.search = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading.search = false;
        state.products = action.payload.products || [];
        const total = action.payload.total ?? 0;
        const page = action.payload.page ?? 1;
        const limit = action.payload.limit ?? 12;
        state.pagination = {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
          hasNextPage: page * limit < total,
          hasPrevPage: page > 1,
        };
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading.search = false;
        state.error.search = action.payload || { message: "Search failed" };
      })

      // ── fetchFeaturedProducts ─────────────────────────────────────────────
      .addCase(fetchFeaturedProducts.pending, (state) => {
        state.loading.featured = true;
        state.error.featured = null;
      })
      .addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
        state.loading.featured = false;
        state.featuredProducts = action.payload.products || [];
      })
      .addCase(fetchFeaturedProducts.rejected, (state, action) => {
        state.loading.featured = false;
        state.error.featured =
          action.payload || { message: "Failed to fetch featured products" };
      })

      // ── fetchRelatedProducts ──────────────────────────────────────────────
      .addCase(fetchRelatedProducts.pending, (state) => {
        state.loading.related = true;
        state.error.related = null;
      })
      .addCase(fetchRelatedProducts.fulfilled, (state, action) => {
        state.loading.related = false;
        state.relatedProducts = action.payload.related || [];
      })
      .addCase(fetchRelatedProducts.rejected, (state, action) => {
        state.loading.related = false;
        state.error.related =
          action.payload || { message: "Failed to fetch related products" };
      });
  },
});

export const {
  clearProducts,
  clearCurrentProduct,
  clearRelatedProducts,
  clearErrors,
} = userProductsSlice.actions;

// ── Selectors ─────────────────────────────────────────────────────────────────
export const selectAllProducts      = (state) => state.userProducts.products;
export const selectCurrentProduct   = (state) => state.userProducts.currentProduct;
export const selectFeaturedProducts = (state) => state.userProducts.featuredProducts;
export const selectRelatedProducts  = (state) => state.userProducts.relatedProducts;
export const selectProductPagination = (state) => state.userProducts.pagination;
export const selectProductsLoading  = (state) => state.userProducts.loading;
export const selectProductsError    = (state) => state.userProducts.error;

export default userProductsSlice.reducer;