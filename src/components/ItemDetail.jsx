import ItemCount from './ItemCount'


export default function ItemDetail ({ detail }){
        return (
        <div className='containerDetail'>
           <h2>{detail?.name}</h2>
           <img src={detail?.image} style={{width: 250, height: 250}} />
           <p>{`Precio $ ${detail?.price}`}</p>
           <p>{detail?.description}</p>
                 <ItemCount detail={detail} />
        </div>
        )
}



