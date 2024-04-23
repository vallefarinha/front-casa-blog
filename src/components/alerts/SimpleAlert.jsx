import Swal from 'sweetalert2';

function SimpleAlert ({ icon, text }) {
    Swal.fire({
      position: "center",
      icon: icon,
      text: text,
      showCloseButton: true,
      showConfirmButton: false,
      timer: 7000,
      color: "#073B4C",
      iconColor: "#073B4C",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
     return null; 
}

export default SimpleAlert