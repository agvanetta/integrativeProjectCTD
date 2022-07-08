import React, { useState } from "react";

const FormImages = ({ administrationForm, setAdministrationForm }) => {
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState([]);

  const handleChangeT = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeI = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setImage(e.target.result);
    };
  };

  const handleDelete = (e) => {
    const deleteImage = administrationForm.images.filter(
      (data, index) => index.toString() !== e.target.id
    );
    setAdministrationForm({ ...administrationForm, images: deleteImage });
  };

  return (
    <>
      <p className="generalContainer__divInput__p">En la foto que se quiere para la portada, ponerle "principal" de título</p>
      <form
        className="generalContainer"
        onSubmit={(e) => {
          e.preventDefault();
          setAdministrationForm({
            ...administrationForm,
            images: [...administrationForm.images, { title: title, url: image }],
          });
        }}>
        <div className="generalContainer__divInput">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChangeT}
            required
          />
        </div>
        <div className="generalContainer__divInput">
          <label htmlFor="image">Subir imágenes</label>
          <input type="file" id="image" name="image" multiple onChange={handleChangeI} required />
        </div>
        <button className="imageBtn">Cargar imagen</button>
      </form>
      <div className="generalImagesContainer">
        {administrationForm.images.map((image, index) => {
          return (
            <div className="imagesDiv" key={index.toString()}>
              <h4 className="imagesDiv__h4">{image.title}</h4>
              <img key={index.toString()} src={image.url} alt={image.title}></img>
              <button className="imagesDiv__btn" id={index} onClick={(e) => handleDelete(e)}>
                Eliminar
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FormImages;
