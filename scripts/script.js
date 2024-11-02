document.addEventListener("DOMContentLoaded", () => {
	const links = document.querySelectorAll("footer .footer-links a");

	links.forEach(link => {
		link.addEventListener("click", function (event) {
			event.preventDefault();

			const sectionId = this.getAttribute("href").substring(1);
			const section = document.getElementById(sectionId);

			if (section) {
				section.scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
			}
		});
	});


	const submit_form = document.getElementById('submit-form');
	const nome = document.getElementById('nome');
	const email = document.getElementById('email');
	const mensagem = document.getElementById('mensagem');

	submit_form.addEventListener("click", () => {
		if (nome.value.trim() == "" || email.value.trim() == "" || mensagem.value.trim() == "" ) {
			alert("Atenção! Todos os campos do formulário devem ser preenchidos antes de enviar o email.");
		}
	});
});
