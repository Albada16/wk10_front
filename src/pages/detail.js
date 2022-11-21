import { useParams } from "react-router-dom"

const Detail = ()=> {
	let {id} = useParams();
	return(
		<div>
			{id}
		</div>
	)
}
export default Detail