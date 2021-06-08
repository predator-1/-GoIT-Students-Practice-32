/** Show toast message on click with toastr*/
// toastr.options = {
//   closeButton: true,
//   debug: false,
//   newestOnTop: false,
//   progressBar: true,
//   positionClass: 'toast-top-right',
//   preventDuplicates: false,
//   onclick: null,
//   showDuration: '300',
//   hideDuration: '1000',
//   timeOut: '5000',
//   extendedTimeOut: '1000',
//   showEasing: 'swing',
//   hideEasing: 'linear',
//   showMethod: 'fadeIn',
//   hideMethod: 'fadeOut',
// };

// $('#message').click(() => {
//   toastr.error('My title', 'My message');
// });
document.querySelector('#message').addEventListener('click', () => {
  toastr.success('My title', 'My message');
});
