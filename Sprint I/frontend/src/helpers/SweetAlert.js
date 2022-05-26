import Swal from "sweetalert2";

const SweetAlert = {  
  messageCloseSession: (title, callback) => {
    Swal.fire({
      title,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión!",
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
        Swal.fire(
          "Sesión cerrada!",
          "La sesión se cerró satisfactoriamente!",
          "success",
        );
      }
    });
  },
};

export default SweetAlert;