import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCategory } from '../../ADMIN_SEGMENT/ADMIN_REDUX_MANAGEMENT/categorySlice';

const CategoryModal = ({ categories, onSelect, onClose }) => {
  const dispatch = useDispatch();
  const [newCategory, setNewCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (newCategory.trim()) {
      setLoading(true);
      try {
        const result = await dispatch(createCategory({ name: newCategory })).unwrap();
        onSelect(result._id);
        setNewCategory('');
        onClose();
      } catch (error) {
        alert('Error creating category: ' + error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[60]">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Add New Category</h3>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg mb-4"
          placeholder="e.g., Electronics"
          autoFocus
          disabled={loading}
        />
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            disabled={loading || !newCategory.trim()}
          >
            {loading ? 'Adding...' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;

// code is working but upside code is api integrated ************
// import React, { useState } from 'react';

// const CategoryModal = ({ categories, setCategories, onSelect, onClose }) => {
//   const [newCategory, setNewCategory] = useState('');

//   const handleAdd = () => {
//     if (newCategory.trim()) {
//       const newCat = { _id: Date.now().toString(), name: newCategory };
//       setCategories([...categories, newCat]);
//       onSelect(newCat._id);
//       setNewCategory('');
//       onClose();
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[60]">
//       <div className="bg-white rounded-2xl max-w-md w-full p-6">
//         <h3 className="text-xl font-bold text-gray-900 mb-4">Add New Category</h3>
//         <input
//           type="text"
//           value={newCategory}
//           onChange={(e) => setNewCategory(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
//           className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg mb-4"
//           placeholder="e.g., Electronics"
//           autoFocus
//         />
//         <div className="flex justify-end gap-3">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-gray-600 hover:text-gray-800"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleAdd}
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//           >
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryModal;