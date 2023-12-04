import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [resultado,setResultado] = useState (""); 
	const [tareas,setTareas]= useState([]) ; 
	const myStyle = {
		width: 600,
		borderRadius: 25,
	};

	return (
		<div id="cascada" className="container d-flex flex-column align-items-center justify-content-center text-light" style={myStyle}>
			<h1>¿Qué tienes que hacer?</h1>
			<ul>
				<input className="form-control mb-2" type="text" placeholder="Escribe aquí tus tareas :D"
				onChange={(cambio) => setResultado(cambio.target.value)}
				value={resultado}
				onKeyDown={(cambio) => {

					if (cambio.key == "Enter") {
						setTareas(tareas.concat(resultado));
						setResultado("");
					}
				}
				}
				/>
				{tareas.map((nuevo, lista) => (
					<li className="row justify-content-between">
						{nuevo} {""} <i className="fas fa-times col-1 mt-1"
						onClick={() =>
							setTareas(
								tareas.filter(
									(e, currentIndex) => 
									lista != currentIndex
								)
							)
						}></i>
					</li>
				))}
			</ul>
			<div className="mb-3">
				{tareas.length ? null : "Bueno, siempre hay practicar programación ;D"}
				{tareas.length ? (<p>{tareas.length} cosas por hacer!</p>) : null}
            </div>
		</div>
	);
};

export default Home;
