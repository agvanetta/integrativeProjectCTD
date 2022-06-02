import Swal from "sweetalert2";

const SweetAlert = {
  messageCloseSession: (title, callback) => {
    Swal.fire({
      title,
      icon: "warning",
      showCancelButton: true,
      iconColor: "#1dbeb4",
      confirmButtonColor: "#717599",
      cancelButtonColor: "#e8514f",
      confirmButtonText: "Sí, cerrar sesión!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
        Swal.fire({
          title: "Sesión cerrada!",
           text: "La sesión se cerró satisfactoriamente!",
           icon: "success",
           iconColor: "#1dbeb4",
           confirmButtonColor: "#717599"
         });
      }
    });
  },
};

export default SweetAlert;
