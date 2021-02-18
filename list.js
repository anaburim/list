$(document).ready(function(){

	
		function addGoal(e) {
			e.preventDefault();
			let name = $ ('input').val();
			    text = $ ('textarea').val();

			if (name && text) {
				
				$('.list_goals').append(`
					
					<div class="list_item">

					<header>

					<div class="list_name">
					<h3>${name}</h3>

                    <button class="list_delete"></button>
					<button class="list_disappear"></button>
					</div>
					
					
					
					</header>

					
					<div class="description">
					<footer>
					<p>					
					<div class="list_description">${text}</div>
					</p>
					</footer>
					</div>
					
					

					</div>

				`);

				$('.list_none').hide();
				name = $('input').val('');
			    text = $('textarea').val('');

			    
			} else {
				$('input').addClass('error');
				$('textarea').addClass('error');
			}
		}
		function deleteGoal(item) {
			item.remove();

			let items = $('.list_item');

			
			if (items.length == 0) {
				$('.list_none').show();
				localStorage.removeItem('goals');
			}
		}

		$('body').on('click', '.goals_to_list', addGoal);
		$('body').on('click', '.list_delete', function(){

			let item = $(this).parents('.list_item');

			deleteGoal(item);
		});

		$('body').on('click','.list_disappear', function(event){
			event.preventDefault();

			$(this).parents('.list_item').find('.description').slideToggle();
			$(this).toggleClass('list_transform');
		});

        
});