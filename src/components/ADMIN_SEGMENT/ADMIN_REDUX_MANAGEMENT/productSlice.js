import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../SERVICES/axiosInstance";

// ========== INITIAL STATE ==========
const initialState = {
  products: [],
  archivedProducts: [],
  draftProducts: [],
  lowStockProducts: [],
  currentProduct: null,
  loading: false,
  error: null,
  totalPages: 1,
  currentPage: 1,
  apiCalls: {
    products: false,
    archived: false,
    drafts: false,
    lowStock: false
  }
};

// ========== ASYNC THUNKS ==========

// GET all active products
export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async ({ page = 1, limit = 20 } = {}, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/admin/products?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch products');
    }
  }
);

// GET single product by slug
export const fetchProductBySlug = createAsyncThunk(
  'products/fetchBySlug',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/admin/products/${slug}`);
      return response.data.product;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch product');
    }
  }
);

// GET archived products
export const fetchArchivedProducts = createAsyncThunk(
  'products/fetchArchived',
  async ({ page = 1, limit = 20 } = {}, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/admin/products/archived?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch archived products');
    }
  }
);

// GET draft products
export const fetchDraftProducts = createAsyncThunk(
  'products/fetchDrafts',
  async ({ page = 1, limit = 20 } = {}, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/admin/products/drafts?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch draft products');
    }
  }
);

// GET low stock products
export const fetchLowStockProducts = createAsyncThunk(
  'products/fetchLowStock',
  async ({ page = 1, limit = 20 } = {}, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/admin/products/low-stock?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch low stock products');
    }
  }
);

// CREATE product (with FormData for images)
export const createProduct = createAsyncThunk(
  'products/create',
  async (productData, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      
      // Append basic fields
      formData.append('name', productData.name);
      formData.append('title', productData.title);
      formData.append('description', productData.description);
      formData.append('category', productData.category);
      formData.append('brand', productData.brand);
      formData.append('status', productData.status);
      formData.append('isFeatured', productData.isFeatured);
      
      // Append nested objects as JSON strings
      formData.append('soldInfo', JSON.stringify(productData.soldInfo));
      formData.append('fomo', JSON.stringify(productData.fomo));
      formData.append('shipping', JSON.stringify(productData.shipping));
      formData.append('attributes', JSON.stringify(productData.attributes));
      formData.append('variants', JSON.stringify(productData.variants));
      
      // Append product images
      if (productData.images && productData.images.length > 0) {
        productData.images.forEach((image, index) => {
          if (image.file) {
            formData.append('images', image.file);
          }
        });
      }
      
      // Append variant images
      if (productData.variants && productData.variants.length > 0) {
        productData.variants.forEach((variant, vIndex) => {
          if (variant.images && variant.images.length > 0) {
            variant.images.forEach((image, iIndex) => {
              if (image.file) {
                formData.append(`variantImages_${vIndex}`, image.file);
              }
            });
          }
        });
      }

      const response = await axiosInstance.post('/admin/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      return response.data.product;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create product');
    }
  }
);

// UPDATE product
export const updateProduct = createAsyncThunk(
  'products/update',
  async ({ slug, productData }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      
      // Append all fields similar to create
      Object.keys(productData).forEach(key => {
        if (key !== 'images' && key !== 'variants' && typeof productData[key] === 'object') {
          formData.append(key, JSON.stringify(productData[key]));
        } else if (key !== 'images' && key !== 'variants') {
          formData.append(key, productData[key]);
        }
      });
      
      formData.append('variants', JSON.stringify(productData.variants));

      const response = await axiosInstance.put(`/admin/products/${slug}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      return response.data.product;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update product');
    }
  }
);

// SOFT DELETE (archive)
export const archiveProduct = createAsyncThunk(
  'products/archive',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/admin/products/${slug}`);
      return { slug, ...response.data };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to archive product');
    }
  }
);

// RESTORE product
export const restoreProduct = createAsyncThunk(
  'products/restore',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(`/admin/products/restore/${slug}`);
      return { slug, ...response.data };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to restore product');
    }
  }
);

// HARD DELETE (permanent)
export const hardDeleteProduct = createAsyncThunk(
  'products/hardDelete',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/admin/products/hard/${slug}`);
      return { slug, ...response.data };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete product');
    }
  }
);

// BULK ARCHIVE
export const bulkArchiveProducts = createAsyncThunk(
  'products/bulkArchive',
  async (slugs, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/admin/products/bulk-delete', { slugs });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to bulk archive');
    }
  }
);

// BULK RESTORE
export const bulkRestoreProducts = createAsyncThunk(
  'products/bulkRestore',
  async (slugs, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch('/admin/products/bulk-restore', { slugs });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to bulk restore');
    }
  }
);

// ========== SLICE ==========
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    resetApiCalls: (state) => {
      state.apiCalls = {
        products: false,
        archived: false,
        drafts: false,
        lowStock: false
      };
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // FETCH PRODUCTS
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products || [];
        state.totalPages = Math.ceil(action.payload.total / action.payload.limit) || 1;
        state.apiCalls.products = true;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // FETCH ARCHIVED
      .addCase(fetchArchivedProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArchivedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.archivedProducts = action.payload.products || [];
        state.apiCalls.archived = true;
      })
      .addCase(fetchArchivedProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // FETCH DRAFTS
      .addCase(fetchDraftProducts.fulfilled, (state, action) => {
        state.draftProducts = action.payload.products || [];
        state.apiCalls.drafts = true;
      })
      
      // FETCH LOW STOCK
      .addCase(fetchLowStockProducts.fulfilled, (state, action) => {
        state.lowStockProducts = action.payload.products || [];
        state.apiCalls.lowStock = true;
      })
      
      // FETCH SINGLE PRODUCT
      .addCase(fetchProductBySlug.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
      })
      
      // CREATE PRODUCT
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products = [action.payload, ...state.products];
        state.loading = false;
      })
      
      // UPDATE PRODUCT
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(p => p._id === action.payload._id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
        state.loading = false;
      })
      
      // ARCHIVE PRODUCT
      .addCase(archiveProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(p => p.slug !== action.payload.slug);
        state.archivedProducts = [...state.archivedProducts, ...state.products.filter(p => p.slug === action.payload.slug)];
      })
      
      // RESTORE PRODUCT
      .addCase(restoreProduct.fulfilled, (state, action) => {
        state.archivedProducts = state.archivedProducts.filter(p => p.slug !== action.payload.slug);
      })
      
      // HARD DELETE
      .addCase(hardDeleteProduct.fulfilled, (state, action) => {
        state.archivedProducts = state.archivedProducts.filter(p => p.slug !== action.payload.slug);
      });
  }
});

export const { clearError, resetApiCalls, setCurrentPage } = productSlice.actions;
export default productSlice.reducer;