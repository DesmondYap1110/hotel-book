export default {

	data() {
		return {
			//processing: false,
		};
	},

	created: function() {


	},

	methods: {

		$_notEmpty ($item) {
			if($item != undefined && $item != null)
				return Object.keys($item).length;
			else
				return 0;
		},

                $_isEmpty ($item) {
                    if ($item == undefined || $item == null) {
                        return true;
                    }
                    return false;
                },

		$_onlyNumber ($event) {
		   //console.log($event.keyCode); //keyCodes value
		   let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
		   if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
		      $event.preventDefault();
		   }
		},

		$_onlyCharacters($event){
			//console.log($event.keyCode); //keyCodes value
			let keyCode = ($event.keyCode ? $event.keyCode : $event.which);

			if (!(($event.charCode > 64 && $event.charCode < 91) || ($event.charCode > 96 && $event.charCode < 123))) {
				$event.preventDefault();
		    }
		},

		$_revertCurrencyResourceFormatting($model, $fields){

			$.each($fields, function(key, value){
				if($model[value])
					if($model[value].unformatted)
						$model[value] = $model[value].unformatted;
			});

			return $model;
		}

	}

};

