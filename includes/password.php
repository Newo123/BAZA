<form class="sendler vertical-middle" name="forgotten" action="/index.php?route=account/forgotten">
  <h3>Изменить пароль</h3>
  <p>Укажите Вашу электронную почту, на которую придет ссылка для изменения/восстановления пароля.</p>
  <label class="fw-placeholder">
    <input class="fw-input callback__input Y-required-email mail" type="text" name="email" <?php if($_GET['email']) { ?> value="<?php echo $_GET['email']; ?>" <?php } ?>>
    <span class="placeholder">E-mail</span>
    <span class="error-placeholder">Введите E-mail</span>
  </label>
  <button class="btn btn-yellow" type="submit">Отправить</button>
</form>
<script type="text/javascript">
	/* $('input[name=phone]').mask('+7(999)-999-99-99'); */
	// $('.callback form input[name=link_page]').attr('value', document.location.href);

    if($('.personal-inner .personal__input[name=email]').length){
        $('form[name=forgotten] input[name=email]').val($('.personal-inner .personal__input[name=email]').val());
    }

	$(function () {
		$(".fw-placeholder .fw-input").on('focusout keyup', function () {
			if ($(this).val() === "" || $(this).val() === '+7(___)-___-__-__') {
				$(this).parent().removeClass('active');
			} else {
				$(this).parent().addClass('active');
			}
		});
	});

</script>