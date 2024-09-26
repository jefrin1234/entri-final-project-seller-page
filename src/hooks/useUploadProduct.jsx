
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../services/addProductService';



const useProductForm = () => {
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const [loading,setLoading]= useState(false)
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    name: '',
    category: '',
    price: '',
    sellingPrice: '',
    description: '',
    stock: '',
    brand: '',
    colour: ''
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImage = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = [];
    const newImages = [];

    files.forEach((file) => {
      if (!file.type.startsWith('image/')) {
        alert("Only image files are allowed!");
        return;
      }

      const img = {
        preview: URL.createObjectURL(file),
        data: file,
      };
      newPreviews.push(img.preview);
      newImages.push(img.data);
    });

    setPreview((prev) => [...prev, ...newPreviews]);
    setImages((prev) => [...prev, ...newImages]);

    e.target.value = null;
  };

  const handleDeleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setPreview((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)

    const formData = new FormData();

    images.forEach((image) => {
      formData.append('images', image);
    });

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    addProduct(formData, navigate);
    setLoading(false)
  };

  return {
    data,
    images,
    preview,
    handleOnchange,
    handleImage,
    handleDeleteImage,
    handleSubmit,
    loading
  };
};

export default useProductForm;
