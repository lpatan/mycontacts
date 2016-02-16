'use strict';

angular.module('myContactsApp').controller(
		'ContactsController',
		function($scope) {
			var uid = 1;
			$scope.contacts = JSON.parse(localStorage.getItem("contacts"));
			$scope.newcontact = {};
			console.log($scope.contacts.length);
			var imageLoader = document.getElementById('imageLoader');
			imageLoader.addEventListener('change', handleImage, false);
			var canvas = document.getElementById('imageCanvas');
			var ctx = canvas.getContext('2d');
			ctx.fillStyle = "white";
			ctx.font = "16px Arial";
			ctx.fillText("No Preview", 30, 100);

			function handleImage(e) {
				var reader = new FileReader();
				reader.onload = function(event) {
					var img = new Image();
					img.onload = function() {
						img.width = canvas.width;
						img.height = canvas.height;
						ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
					}
					img.src = event.target.result;
				}
				reader.readAsDataURL(e.target.files[0]);
			}

			$scope.saveContact = function() {

				if ($scope.newcontact.id == null) {
					$scope.newcontact.id = uid++;
					$scope.contacts.push($scope.newcontact);
					localStorage.setItem(uid, $scope.newcontact);
				} else {

					for (var i = 0; i < $scope.contacts.length; i++) {
						if ($scope.contacts[i].id == $scope.newcontact.id) {
							$scope.contacts[i] = $scope.newcontact;
						}
					}
				}
				$scope.newcontact = {};
				$scope.submitted = false;
				localStorage.setItem("contacts", JSON
						.stringify($scope.contacts));
			}

			$scope.deleteContact = function(id) {

				for (var i = 0; i < $scope.contacts.length; i++) {
					if ($scope.contacts[i].id == id) {
						$scope.contacts.splice(i, 1);
						$scope.newcontact = {};
					}
				}
				$scope.submitted = false;
				localStorage.setItem("contacts", JSON
						.stringify($scope.contacts));
			}

			$scope.reset = function() {
				$scope.submitted = false;
				$scope.newcontact = {};
			}

			$scope.addNew = function() {
				$scope.submitted = false;
				$scope.newcontact = {};
			}

			$scope.editContact = function(contact) {

				for (var i = 0; i < $scope.contacts.length; i++) {

					if ($scope.contacts[i].id == contact.id) {
						$scope.newcontact = angular.copy(contact);
						break;
					}
				}
				localStorage.setItem("contacts", JSON
						.stringify($scope.contacts));
			}

			document.getElementById('imgselector').onclick = function() {
				document.getElementById('imageLoader').click();
			};
		});