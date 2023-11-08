import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [resultado,setResultado] = useState (""); 
	const [tareas,setTareas]= useState([]);

	return (
		<div className="container-fluid d-flex flex-column align-items-center justify-content-start text-light">
			<h1>¿Qué tienes que hacer?</h1>
			<ul>
				<input class="form-control" type="text" placeholder="Escribe aquí tus tareas :D"
				onChange={(cambio) => setResultado(cambio.target.value)}
				value={resultado}
				onKeyPress={(cambio) => {

					if (cambio.key == "Enter") {
						setTareas(tareas.concat(resultado));
					}
				}
				}
				/>
				{tareas.map((nuevo, lista) => (
					<li>
						{nuevo} {""} <i class="fas fa-minus-circle" 
						onClick={() =>
							setTareas(
								tareas.filter(
									(e, currentIndex) => 
									lista != currentIndex
								)
							)
						}>
						</i>
					</li>
				))}
			</ul>
			<div>{tareas.length} cosas por acabar</div>
		</div>
	);
};

export default Home;
