import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../Axiosinstance';

// ==================== INITIAL STATE ====================
const initialState = {
  // Wishlist state
  wishlist: {
    items: [],
    loading: false,
    error: null,
  },
  // Cart state (simple version)
  cart: {
    items: [],
    loading: false,
    error: null,
  },
  // Notification state
  notification: {
    message: null,
    type: null,
    visible: false,
  },
};

// ==================== MOCK DATA STORAGE ====================
// This will act as our "database" for mock mode
let mockWishlistItems = [];

// Check if we're in development/mock mode
const isMockMode = () => {
  // You can set this based on env variable or always true for now
  return import.meta.env.VITE_USE_MOCK_API === 'true' || true; // Force true for now
};

// ==================== WISHLIST THUNKS ====================

// Fetch wishlist
export const fetchWishlist = createAsyncThunk(
  'wishlist/fetchWishlist',
  async (_, { rejectWithValue }) => {
    console.log('🔄 Fetching wishlist...');
    console.log('🎭 Mock mode:', isMockMode());
    
    // If in mock mode, return mock data
    if (isMockMode()) {
      console.log('📦 Using mock wishlist data:', mockWishlistItems);
      return {
        items: mockWishlistItems,
      };
    }
    
    // Real API call
    try {
      const response = await axiosInstance.get('/wishlist');
      
      if (response.data.success) {
        const products = response.data.wishlist?.products?.map(item => ({
          ...item.productId,
          variantId: item.variantId,
          addedAt: item.addedAt,
        })) || [];
        
        return {
          items: products,
        };
      }
      return { items: [] };
    } catch (error) {
      console.error('❌ Failed to fetch wishlist:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch wishlist');
    }
  }
);

// Add to wishlist
export const addToWishlist = createAsyncThunk(
  'wishlist/addToWishlist',
  async (product, { rejectWithValue }) => {
    console.log('🔄 Adding to wishlist - Product:', product.slug, product.name || product.title);
    console.log('🎭 Mock mode:', isMockMode());
    
    // If in mock mode, handle locally
    if (isMockMode()) {
      console.log('📦 Mock mode: Adding to local wishlist');
      
      // Check if product already exists in mock wishlist
      const exists = mockWishlistItems.some(item => item.slug === product.slug);
      
      if (!exists) {
        // Add to mock wishlist with timestamp
        const newItem = {
          ...product,
          addedAt: new Date().toISOString(),
        };
        mockWishlistItems = [...mockWishlistItems, newItem];
        console.log('✅ Mock: Product added to wishlist:', newItem);
      } else {
        console.log('ℹ️ Mock: Product already in wishlist');
      }
      
      return {
        items: mockWishlistItems,
      };
    }
    
    // Real API call
    try {
      const payload = {
        productSlug: product.slug,
      };
      
      const response = await axiosInstance.post('/wishlist/add', payload);
      
      if (response.data.success) {
        const products = response.data.wishlist?.products?.map(item => ({
          ...item.productId,
          variantId: item.variantId,
          addedAt: item.addedAt,
        })) || [];
        
        return {
          items: products,
        };
      }
      throw new Error('Failed to add to wishlist');
    } catch (error) {
      console.error('❌ Failed to add to wishlist:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data?.message || 'Failed to add to wishlist');
    }
  }
);

// Remove from wishlist
export const removeFromWishlist = createAsyncThunk(
  'wishlist/removeFromWishlist',
  async (productSlug, { rejectWithValue }) => {
    console.log('🔄 Removing from wishlist - Product slug:', productSlug);
    console.log('🎭 Mock mode:', isMockMode());
    
    // If in mock mode, handle locally
    if (isMockMode()) {
      console.log('📦 Mock mode: Removing from local wishlist');
      mockWishlistItems = mockWishlistItems.filter(item => item.slug !== productSlug);
      console.log('✅ Mock: Product removed, updated wishlist:', mockWishlistItems);
      
      return {
        items: mockWishlistItems,
      };
    }
    
    // Real API call
    try {
      const response = await axiosInstance.delete(`/wishlist/remove/${productSlug}`);
      
      if (response.data.success) {
        const products = response.data.wishlist?.products?.map(item => ({
          ...item.productId,
          variantId: item.variantId,
          addedAt: item.addedAt,
        })) || [];
        
        return {
          items: products,
        };
      }
      throw new Error('Failed to remove from wishlist');
    } catch (error) {
      console.error('❌ Failed to remove from wishlist:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data?.message || 'Failed to remove from wishlist');
    }
  }
);

// Move to cart
export const moveToCart = createAsyncThunk(
  'wishlist/moveToCart',
  async ({ productSlug, product }, { dispatch, rejectWithValue }) => {
    console.log('🔄 Moving to cart - Product slug:', productSlug);
    
    // Remove from wishlist
    const result = await dispatch(removeFromWishlist(productSlug)).unwrap();
    
    // Add to cart
    dispatch(addToCart(product));
    
    return {
      ...result,
      product,
    };
  }
);

// Clear wishlist
export const clearWishlist = createAsyncThunk(
  'wishlist/clearWishlist',
  async (_, { rejectWithValue }) => {
    console.log('🔄 Clearing wishlist');
    
    // If in mock mode
    if (isMockMode()) {
      mockWishlistItems = [];
      return { items: [] };
    }
    
    // Real API call would go here
    return { items: [] };
  }
);

// ==================== CART THUNKS ====================

// Add to cart
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (product, { getState, rejectWithValue }) => {
    console.log('🛒 Adding to cart - Product:', product.slug, product.name || product.title);
    return product;
  }
);

// Remove from cart
export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (productSlug, { rejectWithValue }) => {
    return productSlug;
  }
);

// ==================== MAIN SLICE ====================
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Wishlist sync actions
    resetWishlist: (state) => {
      state.wishlist.items = [];
      state.wishlist.error = null;
      if (isMockMode()) {
        mockWishlistItems = [];
      }
    },
    clearWishlistError: (state) => {
      state.wishlist.error = null;
    },
    
    // Cart sync actions
    clearCart: (state) => {
      state.cart.items = [];
    },
    clearCartError: (state) => {
      state.cart.error = null;
    },
    
    // Notification actions
    showNotification: (state, action) => {
      state.notification.message = action.payload.message;
      state.notification.type = action.payload.type || 'info';
      state.notification.visible = true;
    },
    hideNotification: (state) => {
      state.notification.visible = false;
      state.notification.message = null;
      state.notification.type = null;
    },
    
    // Debug action to view mock wishlist
    debugMockWishlist: (state) => {
      console.log('🔍 Mock Wishlist Contents:', mockWishlistItems);
    },
  },
  extraReducers: (builder) => {
    builder
      // ===== WISHLIST CASES =====
      // Fetch wishlist
      .addCase(fetchWishlist.pending, (state) => {
        state.wishlist.loading = true;
        state.wishlist.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.wishlist.loading = false;
        state.wishlist.items = action.payload.items;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.wishlist.loading = false;
        state.wishlist.error = action.payload;
      })
      
      // Add to wishlist
      .addCase(addToWishlist.pending, (state) => {
        state.wishlist.loading = true;
        state.wishlist.error = null;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.wishlist.loading = false;
        state.wishlist.items = action.payload.items;
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.wishlist.loading = false;
        state.wishlist.error = action.payload;
      })
      
      // Remove from wishlist
      .addCase(removeFromWishlist.pending, (state) => {
        state.wishlist.loading = true;
        state.wishlist.error = null;
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.wishlist.loading = false;
        state.wishlist.items = action.payload.items;
      })
      .addCase(removeFromWishlist.rejected, (state, action) => {
        state.wishlist.loading = false;
        state.wishlist.error = action.payload;
      })
      
      // Move to cart
      .addCase(moveToCart.pending, (state) => {
        state.wishlist.loading = true;
        state.wishlist.error = null;
      })
      .addCase(moveToCart.fulfilled, (state, action) => {
        state.wishlist.loading = false;
        state.wishlist.items = action.payload.items;
      })
      .addCase(moveToCart.rejected, (state, action) => {
        state.wishlist.loading = false;
        state.wishlist.error = action.payload;
      })
      
      // Clear wishlist
      .addCase(clearWishlist.pending, (state) => {
        state.wishlist.loading = true;
        state.wishlist.error = null;
      })
      .addCase(clearWishlist.fulfilled, (state, action) => {
        state.wishlist.loading = false;
        state.wishlist.items = action.payload.items;
      })
      .addCase(clearWishlist.rejected, (state, action) => {
        state.wishlist.loading = false;
        state.wishlist.error = action.payload;
      })
      
      // ===== CART CASES =====
      .addCase(addToCart.pending, (state) => {
        state.cart.loading = true;
        state.cart.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cart.loading = false;
        const exists = state.cart.items.some(item => item.slug === action.payload.slug);
        if (!exists) {
          state.cart.items.push({ ...action.payload, quantity: 1 });
        }
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.cart.loading = false;
        state.cart.error = action.payload;
      })
      
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.cart.items = state.cart.items.filter(item => item.slug !== action.payload);
      });
  },
});

// ==================== EXPORT ACTIONS ====================
export const {
  resetWishlist,
  clearWishlistError,
  clearCart,
  clearCartError,
  showNotification,
  hideNotification,
  debugMockWishlist,
} = appSlice.actions;

// ==================== EXPORT SELECTORS ====================

// Wishlist selectors
export const selectWishlistItems = (state) => state.app.wishlist.items;
export const selectWishlistCount = (state) => state.app.wishlist.items.length;
export const selectWishlistLoading = (state) => state.app.wishlist.loading;
export const selectWishlistError = (state) => state.app.wishlist.error;
export const selectIsInWishlist = (state, productSlug) => 
  state.app.wishlist.items.some(item => item.slug === productSlug);

// Cart selectors
export const selectCartItems = (state) => state.app.cart.items;
export const selectCartCount = (state) => state.app.cart.items.length;
export const selectCartLoading = (state) => state.app.cart.loading;
export const selectCartError = (state) => state.app.cart.error;

// Notification selectors
export const selectNotification = (state) => state.app.notification;

// ==================== EXPORT REDUCER ====================
export default appSlice.reducer;