import ItemCount from './ItemCount'


export default function ItemDetail ({ detail }){
        return (
        <div>
           <h2>{detail?.title}</h2>
           <img src={detail?.image} style={{width: 300}} />
           <p>{detail?.description}</p>
           <ItemCount />
        </div>
        )
}



