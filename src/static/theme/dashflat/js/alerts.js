(function($) {
  showSwal = function(type) {
    'use strict';
    if (type === 'basic') {
      swal({
        text: 'Any fool can use a computer',
        button: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn btn-primary"
        }
      })

    } else if (type === 'title-and-text') {
      swal({
        title: 'Read the alert!',
        text: 'Click OK to close this alert',
        button: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn btn-primary"
        }
      })

    } else if (type === 'success-message') {
      swal({
        title: 'Congratulations!',
        text: 'You entered the correct answer',
        icon: 'success',
        button: {
          text: "Continue",
          value: true,
          visible: true,
          className: "btn btn-primary"
        }
      })

    } else if (type === 'auto-close') {
      swal({
        title: 'Auto close alert!',
        text: 'I will close in 2 seconds.',
        timer: 2000,
        button: false
      }).then(
        function() {},
        // handling the promise rejection
        function(dismiss) {
          if (dismiss === 'timer') {
            console.log('I was closed by the timer')
          }
        }
      )
    } else if (type === 'warning-message-and-cancel') {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3f51b5',
        cancelButtonColor: '#ff4081',
        confirmButtonText: 'Great ',
        buttons: {
          cancel: {
            text: "Cancel",
            value: null,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true
          }
        }
      })

    } else if (type === 'custom-html') {
      swal({
        content: {
          element: "input",
          attributes: {
            placeholder: "Type your password",
            type: "password",
            class: 'form-control'
          },
        },
        button: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn btn-primary"
        }
      })
    }
  }

})(jQuery);

/*
* SHOP 디자인관리 - 인기검색어관리 - 삭제 확인 버튼 
*/
(function($) {
  showSwal1 = function(type, seq, path) {
    'use strict';
    if (type === 'basic') {
      swal({
        text: 'Any fool can use a computer',
        button: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn btn-primary"
        }
      })

    } else if (type === 'keyword-confirm') {
      swal({
        title: '검색어를 삭제하시겠습니까?',
        text: "삭제 후 되돌릴 수 없습니다!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3f51b5',
        cancelButtonColor: '#ff4081',
        confirmButtonText: {replacement: 'Great ' , link:"/admin"},
        buttons: {
          cancel: {
            text: "취소",
            value: null,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
          confirm: {
            text: "삭제",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
            link: "/admin/",
          }
        }
      }).then((result) => {
        if (result){
          location.href= path +seq;
        }
      })
      
    } 
  }

})(jQuery);

/*
* SCM 상품관리 - 상품리스트 - 선택삭제 버튼 
*/
(function($) {
  showSwal_scm = function(type) {
    'use strict';
    if (type === 'basic') {
      swal({
        text: 'Any fool can use a computer',
        button: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn btn-primary"
        }
      })

    } else if (type === 'delselect-confirm') {
      swal({
        title: '검색어를 삭제하시겠습니까?',
        text: "삭제 후 되돌릴 수 없습니다!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3f51b5',
        cancelButtonColor: '#ff4081',
        confirmButtonText: {replacement: 'Great ' , link:"/admin"},
        buttons: {
          cancel: {
            text: "취소",
            value: null,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
          confirm: {
            text: "삭제",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
            link: "/admin/",
          }
        }
      }).then((result) => {
        if (result){
          $("#form").attr("action", "/product/list_delete");
          $("#form").submit();
        }
      })

    } else if (type === 'product_delselect-confirm') {
      if( $("input[name='chk[]']:checked").length < 1 ) {
        swal({
          title: '상품을 선택해주세요.',
          icon: 'warning',
          button: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-primary"
          }
        })
        return;
      }
      swal({
        title: '상품을 삭제하시겠습니까?',
        text: "삭제 후 되돌릴 수 없습니다!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3f51b5',
        cancelButtonColor: '#ff4081',
        confirmButtonText: {replacement: 'Great ' , link:"/admin"},
        buttons: {
          cancel: {
            text: "취소",
            value: null,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
          confirm: {
            text: "삭제",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
            link: "/admin/",
          }
        }
      }).then((result) => {
        if (result){
          $("#form").attr("action", "/product/list_delete");
          $("#form").submit();
        }
      })
      
    } else if (type === 'sales-delselect-confirm') {
      swal({
        title: '납품사례를 삭제하시겠습니까?',
        text: "삭제 후 되돌릴 수 없습니다!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3f51b5',
        cancelButtonColor: '#ff4081',
        confirmButtonText: {replacement: 'Great ' , link:"/admin"},
        buttons: {
          cancel: {
            text: "취소",
            value: null,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
          confirm: {
            text: "삭제",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
            link: "/admin/",
          }
        }
      }).then((result) => {
        if (result){
          $("#sales_form").submit();
        }
      })
      
    } else if (type === 'sales-proposal-delselect-confirm') {
      swal({
        title: '선택한 제안서를 삭제하시겠습니까?',
        text: "삭제 후 되돌릴 수 없습니다!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3f51b5',
        cancelButtonColor: '#ff4081',
        confirmButtonText: {replacement: 'Great ' , link:"/admin"},
        buttons: {
          cancel: {
            text: "취소",
            value: null,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
          confirm: {
            text: "삭제",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
            link: "/admin/",
          }
        }
      }).then((result) => {
        if (result){
          $("#proposal_list_form").submit();
        }
      })
      
    }
  }

})(jQuery);

/*
* MALL 상품관리 - 상품리스트 - 선택삭제 버튼 
*/
(function($) {
  showSwal_shop = function(type) {
    'use strict';
    if (type === 'basic') {
      swal({
        text: 'Any fool can use a computer',
        button: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn btn-primary"
        }
      })

    } else if (type === 'delselect-confirm') {
      swal({
        title: '검색어를 삭제하시겠습니까?',
        text: "삭제 후 되돌릴 수 없습니다!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3f51b5',
        cancelButtonColor: '#ff4081',
        confirmButtonText: {replacement: 'Great ' , link:"/admin"},
        buttons: {
          cancel: {
            text: "취소",
            value: null,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
          confirm: {
            text: "삭제",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
            link: "/admin/",
          }
        }
      }).then((result) => {
        if (result){
          $("#form").attr("action", "/product/list_delete");
          $("#form").submit();
        }
      })

    } else if (type === 'product_delselect-confirm') {
      if( $("input[name='chk[]']:checked").length < 1 ) {
        swal({
          title: '상품을 선택해주세요.',
          icon: 'warning',
          button: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-primary"
          }
        })
        return;
      }
      swal({
        title: '상품을 삭제하시겠습니까?',
        text: "삭제 후 되돌릴 수 없습니다!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3f51b5',
        cancelButtonColor: '#ff4081',
        confirmButtonText: {replacement: 'Great ' , link:"/admin"},
        buttons: {
          cancel: {
            text: "취소",
            value: null,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
          confirm: {
            text: "삭제",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
            link: "/admin/",
          }
        }
      }).then((result) => {
        if (result){
          $("#form").attr("action", "/admin/product/list_delete");
          $("#form").submit();
        }
      })
      
    } else if (type === 'sales-delselect-confirm') {
      swal({
        title: '납품사례를 삭제하시겠습니까?',
        text: "삭제 후 되돌릴 수 없습니다!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3f51b5',
        cancelButtonColor: '#ff4081',
        confirmButtonText: {replacement: 'Great ' , link:"/admin"},
        buttons: {
          cancel: {
            text: "취소",
            value: null,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
          confirm: {
            text: "삭제",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
            link: "/admin/",
          }
        }
      }).then((result) => {
        if (result){
          $("#sales_form").submit();
        }
      })
      
    } else if (type === 'sales-proposal-delselect-confirm') {
      swal({
        title: '선택한 제안서를 삭제하시겠습니까?',
        text: "삭제 후 되돌릴 수 없습니다!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3f51b5',
        cancelButtonColor: '#ff4081',
        confirmButtonText: {replacement: 'Great ' , link:"/admin"},
        buttons: {
          cancel: {
            text: "취소",
            value: null,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
          confirm: {
            text: "삭제",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
            link: "/admin/",
          }
        }
      }).then((result) => {
        if (result){
          $("#proposal_list_form").submit();
        }
      })
      
    }
  }

})(jQuery);

/*
* 삭제 버튼 
*/
(function($) {
  showSwal_del = function(lnk) {
    'use strict';
    swal({
      title: '선택한 데이터를 삭제하시겠습니까?',
      text: "삭제 후 되돌릴 수 없습니다!",
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3f51b5',
      cancelButtonColor: '#ff4081',
      confirmButtonText: {replacement: 'Great ' , link:"/admin"},
      buttons: {
        cancel: {
          text: "취소",
          value: null,
          visible: true,
          className: "btn btn-danger",
          closeModal: true,
        },
        confirm: {
          text: "삭제",
          value: true,
          visible: true,
          className: "btn btn-primary",
          closeModal: true,
          link: "/admin/",
        }
      }
    }).then((result) => {
      if (result){
        location.href=lnk;
      }
    });
  }
})(jQuery);

/*
* CP 상품관리 - 상품리스트 - 선택삭제 버튼 
*/
(function($) {
  showSwal_cp = function(type) {
    'use strict';
    if (type === 'basic') {
      swal({
        title: 'Any fool can use a computer',
        button: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn btn-primary"
        }
      })

    } else if (type === 'delselect-confirm') {
      swal({
        title: '검색어를 삭제하시겠습니까?',
        text: "삭제 후 되돌릴 수 없습니다!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3f51b5',
        cancelButtonColor: '#ff4081',
        confirmButtonText: {replacement: 'Great ' , link:"/admin"},
        buttons: {
          cancel: {
            text: "취소",
            value: null,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
          confirm: {
            text: "삭제",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
            link: "/admin/",
          }
        }
      }).then((result) => {
        if (result){
          $("#form").attr("action", "/product/list_delete");
          $("#form").submit();
        }
      })

    } else if (type === 'product_delselect-confirm') {
      if( $("input[name='chk[]']:checked").length < 1 ) {
        swal({
          title: '상품을 선택해주세요.',
          icon: 'warning',
          button: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-primary"
          }
        })
        return;
      }
      swal({
        title: '상품을 삭제하시겠습니까?',
        text: "삭제 후 되돌릴 수 없습니다!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3f51b5',
        cancelButtonColor: '#ff4081',
        confirmButtonText: {replacement: 'Great ' , link:"/admin"},
        buttons: {
          cancel: {
            text: "취소",
            value: null,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
          confirm: {
            text: "삭제",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
            link: "/admin/",
          }
        }
      }).then((result) => {
        if (result){
          $("#form").attr("action", "/product/list_delete");
          $("#form").submit();
        }
      })
      
    } 
  }

})(jQuery);