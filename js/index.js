$(document).ready(function() {

  $('form[id="form_check"]').validate({
    rules: {
      fname: 'required',
      lname: 'required',
      user_email: {
        required: true,
        email: true,
      },
      psword: {
        required: true,
        minlength: 8,
      },
      psword2:{
        required:true,
        equalTo:'#psword'
      },
      mobile:{
        required:true,
        minlength:10,
        maxlength:10
      },
      pro_pic:'required'
    },
    messages: {
      fname: 'This field is required',
      lname: 'This field is required',
      user_email: 'Enter a valid email',
      psword: {
        minlength: 'Password must be at least 8 characters long'
      },
      psword2:{
        equalTo:'Must be similar to Password.'
      }
    },
    submitHandler: function(form) {
      form.submit();
      alert('form submitted');
    }
  });

});