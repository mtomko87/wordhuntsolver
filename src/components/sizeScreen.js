import '../css/sizeScreen.css'
import SizeChoice from './sizeChoice'

const SizeScreen = props => {
    return (
        <div className="sizeScreen">
            <p className="sizeHeader">SELECT A GRID SIZE</p>
            <div className="sizeChoices">
                <SizeChoice size={4} select={props.selectSize}/>
                <SizeChoice size={5} select={props.selectSize}/>
            </div>
        </div>
    );
}

export default SizeScreen;