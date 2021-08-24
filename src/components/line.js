import { useEffect, useRef } from 'react';
import '../css/line.css'

const Line = props => {

    const line = useRef(null);
    useEffect(() => {

        const initialLength = Math.sqrt((props.end.x - props.start.x) ** 2 + (props.end.y - props.start.y) ** 2);
        const normalX = (props.end.x - props.start.x) / initialLength;
        const normalY = (props.end.y - props.start.y) / initialLength;
        const start = {x: props.start.x - (normalX * 6), y: props.start.y - (normalY * 6)};
        const end = {x: props.end.x + (normalX * 6), y: props.end.y + (normalY * 6)};
    
        const length = Math.sqrt((end.x - start.x) ** 2 + (end.y - start.y) ** 2);
        const angle = Math.atan2(end.y - start.y, end.x - start.x);
        const midpointX = (start.x + end.x) / 2;
        const midpointY = (start.y + end.y) / 2;
        const posX = midpointX - (length / 2);
        const posY = midpointY - 6;

        const element = line.current;
        element.style.width = length + "px";
        element.style.top = posY + "px";
        element.style.left = posX + "px";
        element.style.transform = "rotate(" + angle + "rad)"
    });

    return (
        <div ref={line} className="line"></div>
    )
}

export default Line;