import React, { useState } from 'react';

// ================= DEFAULT VARIANT SHAPE =================
export const defaultVariant = {
  attributes: [{ key: '', value: '' }],
  price: { base: '', sale: '' },
  inventory: { quantity: 0, lowStockThreshold: 5, trackInventory: true },
  images: [],
  isActive: true
};

const VariantModal = ({
  // The variant being added/edited (pre-filled for edit, defaultVariant for add)
  variantForm,
  setVariantForm,
  // Which index is being edited (null = adding new)
  editingVariantIndex,
  // Callbacks
  onSave,   // () => void — called after validation passes, parent does the actual save
  onClose,  // () => void
  // Helpers
  getDiscountPercentage
}) => {

  const [variantImageDragging, setVariantImageDragging] = useState(false);

  // ================= VARIANT ATTRIBUTE HANDLING =================
  const addVariantAttribute = () => {
    setVariantForm(prev => ({
      ...prev,
      attributes: [...prev.attributes, { key: '', value: '' }]
    }));
  };

  const removeVariantAttribute = (index) => {
    setVariantForm(prev => ({
      ...prev,
      attributes: prev.attributes.filter((_, i) => i !== index)
    }));
  };

  const updateVariantAttribute = (index, field, value) => {
    setVariantForm(prev => ({
      ...prev,
      attributes: prev.attributes.map((attr, i) =>
        i === index ? { ...attr, [field]: value } : attr
      )
    }));
  };

  // ================= VARIANT IMAGE HANDLING =================
  const handleVariantImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [...variantForm.images];

    files.forEach((file, index) => {
      if (newImages.length < 4) {
        const reader = new FileReader();
        const imageId = `vimg-${Date.now()}-${index}`;

        reader.onloadend = () => {
          newImages.push({
            id: imageId,
            url: reader.result,
            file: file,
            name: file.name,
            isMain: newImages.length === 0
          });
          setVariantForm(prev => ({ ...prev, images: [...newImages] }));
        };

        reader.readAsDataURL(file);
      }
    });
  };

  const removeVariantImage = (imageId) => {
    const newImages = variantForm.images.filter(img => img.id !== imageId);
    if (variantForm.images.find(img => img.id === imageId)?.isMain && newImages.length > 0) {
      newImages[0].isMain = true;
    }
    setVariantForm(prev => ({ ...prev, images: newImages }));
  };

  const setVariantMainImage = (imageId) => {
    setVariantForm(prev => ({
      ...prev,
      images: prev.images.map(img => ({ ...img, isMain: img.id === imageId }))
    }));
  };

  // ================= SAVE WITH VALIDATION =================
  const handleSave = () => {
    const validAttributes = variantForm.attributes.filter(a => a.key.trim() && a.value.trim());
    if (validAttributes.length === 0) {
      alert('Please add at least one attribute (e.g., Color: Blue)');
      return;
    }
    if (!variantForm.price.base) {
      alert('Please enter base price for this variant');
      return;
    }
    // Pass validated + cleaned data up to parent
    onSave({
      ...variantForm,
      attributes: validAttributes,
      price: {
        base: parseFloat(variantForm.price.base) || 0,
        sale: variantForm.price.sale !== '' ? parseFloat(variantForm.price.sale) : null
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center p-4 z-[60] overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full my-8 shadow-2xl">

        {/* ===== HEADER ===== */}
        <div className="p-5 border-b border-gray-200 flex items-center justify-between bg-indigo-50 rounded-t-2xl">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {editingVariantIndex !== null ? 'Edit Variant' : 'Add New Variant'}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Define attributes, price, stock and images for this variant
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-white rounded-xl transition-colors"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ===== BODY ===== */}
        <div className="p-5 space-y-5">

          {/* --- Attributes --- */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-gray-800">
                Variant Attributes <span className="text-red-400">*</span>
              </label>
              <button
                type="button"
                onClick={addVariantAttribute}
                className="text-xs px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 font-medium"
              >
                + Add More
              </button>
            </div>
            <div className="space-y-2">
              {variantForm.attributes.map((attr, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={attr.key}
                    onChange={(e) => updateVariantAttribute(index, 'key', e.target.value)}
                    className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-400 focus:bg-white"
                    placeholder="Key (e.g., Color)"
                  />
                  <input
                    type="text"
                    value={attr.value}
                    onChange={(e) => updateVariantAttribute(index, 'value', e.target.value)}
                    className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-400 focus:bg-white"
                    placeholder="Value (e.g., Blue)"
                  />
                  {variantForm.attributes.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeVariantAttribute(index)}
                      className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* --- Pricing --- */}
          <div>
            <label className="text-sm font-semibold text-gray-800 mb-3 block">
              Variant Pricing (₹) <span className="text-red-400">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Base Price (₹)</label>
                <input
                  type="number"
                  value={variantForm.price.base}
                  onChange={(e) => setVariantForm(prev => ({ ...prev, price: { ...prev.price, base: e.target.value } }))}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-400 focus:bg-white"
                  placeholder="89000"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">
                  Sale Price (₹) <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="number"
                  value={variantForm.price.sale}
                  onChange={(e) => setVariantForm(prev => ({ ...prev, price: { ...prev.price, sale: e.target.value } }))}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-400 focus:bg-white"
                  placeholder="79000"
                />
              </div>
            </div>
            {variantForm.price.base && variantForm.price.sale && Number(variantForm.price.sale) < Number(variantForm.price.base) && (
              <div className="mt-2 flex items-center gap-2 text-xs text-green-700 bg-green-50 px-3 py-1.5 rounded-lg">
                <span>💰</span>
                <span>{getDiscountPercentage(variantForm.price.base, variantForm.price.sale)}% discount applied</span>
              </div>
            )}
          </div>

          {/* --- Inventory --- */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-gray-800">Variant Inventory</label>
              <button
                type="button"
                onClick={() => setVariantForm(prev => ({
                  ...prev,
                  inventory: { ...prev.inventory, trackInventory: !prev.inventory.trackInventory }
                }))}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                  variantForm.inventory.trackInventory ? 'bg-indigo-500' : 'bg-gray-300'
                }`}
              >
                <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                  variantForm.inventory.trackInventory ? 'translate-x-5' : 'translate-x-1'
                }`} />
              </button>
            </div>
            {variantForm.inventory.trackInventory && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Quantity</label>
                  <input
                    type="number"
                    value={variantForm.inventory.quantity}
                    onChange={(e) => setVariantForm(prev => ({
                      ...prev,
                      inventory: { ...prev.inventory, quantity: parseInt(e.target.value) || 0 }
                    }))}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-400 focus:bg-white"
                    placeholder="25"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Low Stock Threshold</label>
                  <input
                    type="number"
                    value={variantForm.inventory.lowStockThreshold}
                    onChange={(e) => setVariantForm(prev => ({
                      ...prev,
                      inventory: { ...prev.inventory, lowStockThreshold: parseInt(e.target.value) || 5 }
                    }))}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-400 focus:bg-white"
                    placeholder="5"
                  />
                </div>
              </div>
            )}
          </div>

          {/* --- Variant Images --- */}
          <div>
            <label className="text-sm font-semibold text-gray-800 mb-3 block">
              Variant Images <span className="text-gray-400 text-xs font-normal">(up to 4)</span>
            </label>
            <label
              className={`block w-full border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-all mb-3 ${
                variantImageDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'
              }`}
              onDragOver={(e) => { e.preventDefault(); setVariantImageDragging(true); }}
              onDragLeave={() => setVariantImageDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setVariantImageDragging(false);
                handleVariantImageUpload({ target: { files: e.dataTransfer.files } });
              }}
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleVariantImageUpload}
                className="hidden"
                disabled={variantForm.images.length >= 4}
              />
              <svg className="w-7 h-7 mx-auto mb-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-xs text-gray-500">
                {variantForm.images.length >= 4
                  ? 'Max images reached'
                  : `Click or drop images (${variantForm.images.length}/4)`}
              </p>
            </label>

            {variantForm.images.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {variantForm.images.map((image) => (
                  <div
                    key={image.id}
                    className={`relative rounded-lg overflow-hidden border-2 ${
                      image.isMain ? 'border-indigo-500' : 'border-gray-200'
                    }`}
                  >
                    <img src={image.url} alt="" className="w-full h-16 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center gap-1 opacity-0 hover:opacity-100">
                      {!image.isMain && (
                        <button
                          type="button"
                          onClick={() => setVariantMainImage(image.id)}
                          className="p-1 bg-white rounded-full text-indigo-600"
                          title="Set as main"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => removeVariantImage(image.id)}
                        className="p-1 bg-white rounded-full text-red-500"
                        title="Remove"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    {image.isMain && (
                      <div className="absolute top-1 left-1">
                        <span className="text-[9px] bg-indigo-500 text-white px-1 rounded font-medium">MAIN</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* --- Active Status --- */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <span className="text-sm font-medium text-gray-700">Variant Active</span>
              <p className="text-xs text-gray-400">Inactive variants won't show on website</p>
            </div>
            <button
              type="button"
              onClick={() => setVariantForm(prev => ({ ...prev, isActive: !prev.isActive }))}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                variantForm.isActive ? 'bg-indigo-500' : 'bg-gray-300'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                variantForm.isActive ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

        </div>

        {/* ===== FOOTER ===== */}
        <div className="p-5 border-t border-gray-100 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-700"
          >
            {editingVariantIndex !== null ? 'Update Variant' : 'Save Variant'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default VariantModal;