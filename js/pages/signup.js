$(function () {
    $('#signup').validate({
        rules: {
            'confirm': {
                equalTo: '[name="password"]'
            }
        },
        highlight: function (input) {
            console.log(input);
            $(input).parents('.form-group').addClass('error');
        },
        unhighlight: function (input) {
            $(input).parents('.form-group').removeClass('error');
        },
        errorPlacement: function (error, element) {
            $(element).parents('.form-group').append(error);
            $(element).parents('.form-group').append(error);
        }
    });
});