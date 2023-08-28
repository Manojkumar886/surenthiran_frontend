import './External.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function OrderlistHTML()
{
    const csschange={color:'red',textShadow:'3px 4px 2px black'};
    return(
        <>
        <ol>
            Web Technolgies
            <li style={csschange}>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Material UI</li>
            <li>Bootstrap Icons</li>
            <li>Client side Java Script</li>
            
        </ol>
        </>
    );
}


let TablesHTML=()=>
{
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Employee No</th>
                    <th>Employee Name</th>
                    <th>Employee Designation</th>
                    <th>Employee City</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>10001</td>
                    <td>Manojkumar</td>
                    <td>Java Full Stack Developer</td>
                    <td>Namakkal</td>
                </tr>
                <tr>
                    <td>10002</td>
                    <td>Surenthiran </td>
                    <td>Junior Java Stack Developer</td>
                    <td>Namakkal</td>
                </tr>
            </tbody>
        </table>
        </>
    );
}

export let ParaHTML=()=>
{
    return(
        <a href="./Oracle -Queries.txt" target="_blank">Oracle</a>
    );
}

export function ImgHTML()
{
    return(
        <img src="./Tom-and-Jerry-Background.jpg" width='700px' height='500px'/>
    );
}


export {TablesHTML}

export default OrderlistHTML;