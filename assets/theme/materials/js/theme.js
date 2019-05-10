window.slate = window.slate || {};

$(document).ready(function() {
    $('.quantity-counter .add').on('click.quantity-add', function(e) {
    var $counter = $(this).closest('.quantity-counter');
    var id = $(e.target).closest('.gallery-item').attr('data-item-id');
    var input = $(this).siblings('input[type=number]');
    var newQuantity = parseInt(input.val()) + 1;
    input.val(newQuantity);
    input.trigger('change');

    var inCart = $(this).closest('.cart-container').length;
    if (inCart) {
      $counter.addClass('disabled');
      Shopify.changeItem(id, newQuantity, function() {
        $counter.removeClass('disabled');
      });
    }
  });

  $('.quantity-counter .remove').on('click.quantity-remove', function(e) {
    var $counter = $(this).closest('.quantity-counter');
    var id = $(e.target).closest('.gallery-item').attr('data-item-id');
    var input = $(this).siblings('input[type=number]');
    var newQuantity = parseInt(input.val()) - 1;
    input.val(newQuantity);
    input.trigger('change');

    var inCart = $(this).closest('.cart-container').length;
    if (inCart) {
      $counter.addClass('disabled');
      Shopify.changeItem(id, newQuantity, function() {
        $counter.removeClass('disabled');
      });
    }
  });

  $('.quantity-counter input[type=number]').on('change.quantity-change', function(e) {
    var $counter = $(this).closest('.quantity-counter');
    var id = $(e.target).closest('.gallery-item').attr('data-item-id');
    var newQuantity = parseInt($(this).val());
    if (newQuantity <= 0) {
      $(this).siblings('.remove').addClass('disabled');
    } else {
      $(this).siblings('.remove').removeClass('disabled');
    }

    var inCart = $(this).closest('.cart-container').length;
    if (inCart) {
      $counter.addClass('disabled');
      Shopify.changeItem(id, newQuantity, function(item) {
        var price = item.total_price.toString();
        var len = price.length;
        price = price.substring(0, len-2) + "." + price.substring(len-2);
        $counter.removeClass('disabled');
        $('.cart-summary .subtotal .price').text('$' + price);
      });
    }
  });

  $('.button-collapse').sideNav();
  $('.modal').modal();
});
