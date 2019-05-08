function getInfoPC(i) {
    if (i === 1) {
        $('#pcName').html('月卡会员');
        $('#pcPrice').html('￥ 12');
        $('#pcOrder').html('12 元');
        $('#pcBtn1').addClass('added').attr("disabled", true).html('已选择');
        $('#pcBtn2').removeClass('added').attr("disabled", false).html('选择此项');
        $('#pcBtn3').removeClass('added').attr("disabled", false).html('选择此项');
        $('#pcBtn4').removeClass('added').attr("disabled", false).html('选择此项');
    } else if (i === 2) {
        $('#pcName').html('半年会员');
        $('#pcPrice').html('￥ 60');
        $('#pcOrder').html('60 元');

        $('#pcBtn1').removeClass('added').attr("disabled", false).html('选择此项');
        $('#pcBtn2').addClass('added').attr("disabled", true).html('已选择');
        $('#pcBtn3').removeClass('added').attr("disabled", false).html('选择此项');
        $('#pcBtn4').removeClass('added').attr("disabled", false).html('选择此项');
    } else if (i === 3) {
        $('#pcName').html('年卡会员');
        $('#pcPrice').html('￥ 99');
        $('#pcOrder').html('99 元');

        $('#pcBtn1').removeClass('added').attr("disabled", false).html('选择此项');
        $('#pcBtn2').removeClass('added').attr("disabled", false).html('选择此项');
        $('#pcBtn3').addClass('added').attr("disabled", true).html('已选择');
        $('#pcBtn4').removeClass('added').attr("disabled", false).html('选择此项');
    } else if (i === 4) {
        $('#pcName').html('永久会员');
        $('#pcPrice').html('￥ 199');
        $('#pcOrder').html('199 元');

        $('#pcBtn1').removeClass('added').attr("disabled", false).html('选择此项');
        $('#pcBtn2').removeClass('added').attr("disabled", false).html('选择此项');
        $('#pcBtn3').removeClass('added').attr("disabled", false).html('选择此项');
        $('#pcBtn4').addClass('added').attr("disabled", true).html('已选择');
    }

    $('#product').val(i);
}

$(function () {
    $('#pcBtn1').click(function () {
        getInfoPC(1);
    });

    $('#pcBtn2').click(function () {
        getInfoPC(2);
    });

    $('#pcBtn3').click(function () {
        getInfoPC(3);
    });

    $('#pcBtn4').click(function () {
        getInfoPC(4);
    });

    $('#product2').change(function () {
        if ($(this).val() == 1) {
            $('#phoneName').html('月卡会员');
            $('#phonePrice').html('￥ 12');
        } else if ($(this).val() == 2) {
            $('#phoneName').html('半年会员');
            $('#phonePrice').html('￥ 60');

        } else if ($(this).val() == 3) {
            $('#phoneName').html('年卡会员');
            $('#phonePrice').html('￥ 99');

        } else if ($(this).val() == 4) {
            $('#phoneName').html('永久会员');
            $('#phonePrice').html('￥ 199');

        }
    })
});