<form class="vertical-middle" method="POST" name="callback" action="/index.php?route=account/login">
  <h3>Вход</h3>

  <label class="fw-placeholder">
    <input class="fw-input callback__input Y-required-email mail" type="text" name="email">
    <span class="placeholder">Электронная почта</span>
    <span class="error-placeholder">Введите E-mail</span>
  </label>

  <label class="fw-placeholder fw-placeholder-password">
    <input class="fw-input callback__input Y-required Y-required-password" type="password" name="password">
    <span class="placeholder">Пароль</span>
    <span class="error-placeholder">Введите пароль</span>
    <span class="password-toggle js-passwordToggle"></span>
  </label>
  
  <button class="btn btn-yellow" type="submit">Войти</button>
    <a class="login__link load--password" href="#">Забыли пароль?</a>
    <a class="login__link">Еще не зарегистированны?</a>
  <input type="hidden" name="link_page" value="">
</form>
<script type="text/javascript">
	/* $('input[name=phone]').mask('+7(999)-999-99-99'); */
	$('.callback form input[name=link_page]').attr('value', document.location.href);

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
<script type="text/javascript">
    $('body').on('click', '.js-passwordToggle', function () {
        let form = $(this).closest('form');
        $('.js-passwordToggle').toggleClass('active');
        let hiddenInput = form.find('.js-passwordToggle').siblings('input');
        $(hiddenInput).each(function() {
            let inputType = $(this).attr('type');
            if (inputType == 'password') {
                $(this).attr('type', 'text');
            } else {
                $(this).attr('type', 'password');
            }
        });
    });
</script>