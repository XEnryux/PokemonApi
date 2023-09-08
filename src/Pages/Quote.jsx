

export const Quote = ({ front, shiny, name, id }) => {

  



    return (<>
        <blockquote className='blockquote text-end'
            style={{ display: 'flex' }}
        >
            <img src={front} alt={name} /><img src={shiny} alt={name} />
            <footer className='blockquote-footer'>number: {id}</footer>
            <footer  className='blockquote-footer'>{name}</footer>
        </blockquote>
    </>
    )
}
