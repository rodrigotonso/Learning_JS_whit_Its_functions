<script>
/**
 * En JavaScript casi todo es objeto, en este caso vamos a estar interactuando con los string (cadenas de texto) que pueden ser tratados como objetos en JS.
 *
 * Es importante destacar prototype, un objeto que se incorpora automaticamente dentro de todos los objetos de JS, cuando se intenta acceder una propiedad de un objeto JS la buscara en el objeto y si no la encuentra la buscará dentro del prototype, esto nos permite agregar en posteriori propiedades a un objeto como puede ser el objeto String.
 *
 * Como resultado siempre se obtiene muy superior la función nativa de JavaScript
 */
"use strict"  //Expresíón literal que obliga a correctas expresiones en JavaScript
/**
 * Asignación de la función anonima myConcat al prototype del objeto nativo String.
 */
String.prototype.myConcat = function (){
	let concat = this;	//Guardo el valor del objeto que esta llamando a la función myConcat
		/**
		 *  Notar que dentro del primer bloque del for defino las dos variables, esto esta optimizado ya que el ciclo for lee este primer bloque solo una vez.
		 */
		for (let i = 0, j = arguments.length; i < j; i++) {
			concat += arguments[i];
		}
		return concat;
}

/**
 *  Ya tenemos nuestra función para concatenar ahora comparemosla con la nativa de JavaScript
 *  Concatenaremos mil palabras para ver como se comporta.
 */
var lorem = ["Lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit","ante","cum","id","dapibus","feugiat","diam","senectus","cursus","sem","eget","curabitur","rutrum","sociosqu","molestie","hac","torquent","enim","curae","taciti","sagittis","nulla","risus","etiam","Neque","congue","consequat","potenti","varius","nisl","tellus","ridiculus","orci","quisque","faucibus","nostra","dictumst","a","interdum","facilisi","in","massa","nec","ullamcorper","Inceptos","condimentum","turpis","fringilla","arcu","convallis","lacinia","volutpat","euismod","imperdiet","netus","odio","ornare","pretium","luctus","dictum","platea","porttitor","malesuada","felis","magna","tempor","auctor","suscipit","mauris","vivamus","class2","tincidunt","Gravida","eros","parturient","urna","aenean","erat","primis","cras","eu","lacus","est","penatibus","habitant","vitae","conubia","nascetur","nullam","natoque","venenatis","mollis","phasellus","fames","litora","fermentum","nisi","maecenas","vel","Eleifend","sed","elementum","habitasse","mattis","aptent","tempus","iaculis","lectus","leo","justo","non","ut","tortor","montes","Semper","tristique","rhoncus","lobortis","sociis","mi","magnis","laoreet","sapien","placerat","commodo","sodales","velit","et","morbi","himenaeos","dis","nam","ac","ultrices","proin","Aliquet","libero","vehicula","quam","accumsan","integer","at","suspendisse","quis","vestibulum","mus","hendrerit","ad","blandit","porta","duis","ligula","pharetra","fusce","vulputate","per","dui","ultricies","cubilia","praesent","dignissim","viverra","scelerisque","Egestas","pulvinar","nibh","posuere","augue","sollicitudin","nunc","pellentesque","purus","metus","aliquam","facilisis","bibendum","donec","condimentum","himenaeos","nisi","donec","augue","posuere","netus","ligula","litora","suscipit","est","ridiculus","phasellus","sed","dapibus","luctus","nunc","tristique","Sociosqu","ullamcorper","sapien","enim","eu","quam","mattis","erat","mus","ornare","molestie","montes","non","rhoncus","commodo","dignissim","nec","dui","venenatis","felis","sem","metus","porta","nulla","facilisi","turpis","fringilla","Semper","natoque","interdum","sagittis","sociis","eleifend","torquent","nibh","tortor","platea","cubilia","imperdiet","potenti","bibendum","convallis","nullam","fusce","eget","nostra","tincidunt","varius","volutpat","duis","nascetur","taciti","Accumsan","libero","curae","mollis","curabitur","proin","per","ut","lobortis","integer","parturient","rutrum","faucibus","arcu","tempor","conubia","magnis","primis","pellentesque","malesuada","auctor","penatibus","congue","facilisis","vel","a","porttitor","vehicula","cras","praesent","Laoreet","vestibulum","blandit","iaculis","class2","elementum","gravida","dictum","dictumst","morbi","cum","pretium","velit","euismod","lacinia","inceptos","lectus","magna","mauris","consequat","purus","in","Diam","senectus","habitant","egestas","lacus","vivamus","at","aptent","cursus","et","scelerisque","nam","vulputate","maecenas","aliquam","habitasse","aliquet","suspendisse","hac","ac","nisl","urna","etiam","neque","pulvinar","odio","orci","fermentum","massa","eros","ultrices","Dis","mi","id","sodales","justo","risus","pharetra","tellus","leo","aenean","feugiat","ante","fames","placerat","tempus","vitae","quis","ad","hendrerit","quisque","viverra","ultricies","sollicitudin","conubia","Accumsan","posuere","imperdiet","curae","placerat","mi","est","dictum","gravida","pharetra","hac","consequat","metus","bibendum","iaculis","lacinia","porttitor","elementum","fermentum","facilisis","cum","taciti","Mauris","sollicitudin","class2","sociosqu","dictumst","platea","nascetur","ad","litora","donec","nisl","interdum","tempor","ante","pretium","rhoncus","nec","praesent","dignissim","magnis","morbi","eros","sodales","sem","congue","Sapien","tortor","maecenas","nulla","cras","ornare","lectus","sociis","dui","facilisi","aliquet","luctus","odio","arcu","blandit","vitae","faucibus","neque","eu","scelerisque","orci","primis","quam","aptent","id","justo","torquent","venenatis","Massa","nostra","habitasse","volutpat","erat","proin","turpis","et","tristique","sagittis","enim","dis","ullamcorper","cursus","feugiat","tempus","phasellus","urna","nibh","nisi","nam","leo","in","pulvinar","purus","curabitur","penatibus","a","hendrerit","malesuada","suscipit","auctor","pellentesque","Ut","fames","diam","euismod","tellus","duis","eleifend","netus","cubilia","non","lobortis","mus","velit","vivamus","per","vel","mollis","integer","potenti","semper","tincidunt","vestibulum","nullam","rutrum","augue","libero","aenean","Nunc","at","magna","ac","risus","fringilla","porta","felis","inceptos","mattis","quis","laoreet","quisque","fusce","viverra","vulputate","Eget","sed","ultricies","lacus","vehicula","montes","natoque","ligula","condimentum","himenaeos","molestie","egestas","suspendisse","ridiculus","ultrices","habitant","dapibus","convallis","aliquam","varius","commodo","etiam","parturient","senectus","feugiat","vehicula","ut","vivamus","Mattis","non","velit","consequat","convallis","dictumst","aliquam","sodales","gravida","rhoncus","vestibulum","praesent","lobortis","nullam","sociosqu","urna","vel","commodo","quis","per","netus","scelerisque","posuere","tellus","pretium","auctor","blandit","Facilisis","pharetra","mollis","est","et","cursus","fermentum","venenatis","accumsan","penatibus","metus","elementum","eros","inceptos","dapibus","cubilia","sollicitudin","dignissim","luctus","quisque","conubia","proin","euismod","nulla","id","Lacinia","ultrices","natoque","tincidunt","volutpat","facilisi","sem","risus","turpis","orci","nibh","aptent","curae","faucibus","etiam","cum","massa","justo","bibendum","litora","senectus","donec","egestas","habitant","dui","laoreet","condimentum","integer","felis","lectus","dictum","habitasse","ad","magna","Nec","maecenas","montes","fames","ac","mi","a","ante","suspendisse","nunc","morbi","sed","nascetur","porttitor","pellentesque","tortor","aliquet","neque","Mus","tempor","class2","tristique","varius","ultricies","vulputate","pulvinar","cras","dis","torquent","nisl","eget","mauris","diam","semper","platea","magnis","imperdiet","lacus","ullamcorper","rutrum","hac","libero","duis","taciti","Malesuada","ligula","molestie","fringilla","primis","ornare","interdum","viverra","fusce","himenaeos","erat","nam","curabitur","eu","congue","parturient","phasellus","purus","nisi","augue","placerat","eleifend","leo","potenti","aenean","in","Sapien","suscipit","sociis","tempus","ridiculus","odio","quam","enim","porta","sagittis","iaculis","nostra","hendrerit","arcu","at","vitae","integer","luctus","platea","rhoncus","non","ad","natoque","mus","aptent","convallis","molestie","velit","nascetur","pretium","ridiculus","dui","Lacinia","inceptos","elementum","mattis","habitant","a","blandit","torquent","auctor","nisi","sem","est","imperdiet","rutrum","porta","ornare","interdum","vestibulum","dis","mi","Eu","nec","varius","habitasse","massa","nostra","condimentum","praesent","curae","viverra","etiam","cubilia","magnis","erat","sociis","cras","eleifend","ultrices","risus","Hac","arcu","diam","sed","ultricies","gravida","congue","magna","cursus","ut","enim","et","facilisi","ac","volutpat","nam","consequat","fusce","aliquet","penatibus","leo","quis","vehicula","potenti","morbi","libero","pulvinar","Purus","donec","lobortis","vitae","phasellus","bibendum","tellus","euismod","quisque","mauris","montes","nunc","posuere","tortor","vel","augue","metus","iaculis","fermentum","dictum","aliquam","class2","hendrerit","pharetra","egestas","mollis","feugiat","urna","Dignissim","ullamcorper","aenean","sollicitudin","eget","dapibus","orci","nullam","neque","justo","nibh","himenaeos","maecenas","turpis","Id","sagittis","in","suspendisse","malesuada","nulla","tempus","primis","ante","commodo","faucibus","odio","venenatis","vivamus","netus","lacus","quam","suscipit","proin","lectus","sodales","felis","vulputate","facilisis","per","curabitur","scelerisque","Laoreet","fringilla","tincidunt","eros","tristique","accumsan","duis","tempor","nisl","parturient","at","fames","cum","pellentesque","semper","sapien","litora","placerat","porttitor","ligula","conubia","sociosqu","dictumst","senectus","taciti","mi","commodo","aptent","a","metus","nisi","egestas","dictumst","vitae","posuere","primis","Mollis","scelerisque","nec","pharetra","himenaeos","curabitur","litora","dui","venenatis","neque","sed","elementum","semper","sem","nam","ligula","feugiat","inceptos","cras","suscipit","tempor","potenti","est","sollicitudin","rutrum","tellus","Nullam","dapibus","aliquet","porttitor","arcu","lacinia","libero","massa","interdum","nascetur","morbi","conubia","placerat","luctus","odio","malesuada","in","ultricies","aenean","mattis","magna","natoque","viverra","integer","dis","iaculis","praesent","euismod","fusce","nisl","vel","Eleifend","hendrerit","platea","quam","eros","class2","imperdiet","netus","quis","vehicula","purus","enim","pellentesque","pulvinar","dictum","fringilla","senectus","duis","augue","maecenas","vulputate","sodales","ac","parturient","Dignissim","blandit","ridiculus","congue","gravida","quisque","nulla","at","ut","cursus","sociis","taciti","diam","facilisis","torquent","hac","magnis","montes","sagittis","accumsan"]

/**
 *  Finalmente usamos ambas funciones comparando sus tiempos
 */
console.time("myConcant");
	"myConcant:".myConcat(lorem);
console.timeEnd("myConcant");
console.time("concant");
	"concant:".concat(lorem);
console.timeEnd("concant");
</script>