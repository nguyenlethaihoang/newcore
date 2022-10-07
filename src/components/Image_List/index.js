import './Image_List.css'

function Image_List({object}) {
    return ( 
        
        <div className='main_Image_List'>
            {
                object.map((data,index) => {
                return (
                    <div className='sub_Image_List'>
                        <img
                        key={data.id}
                        src = {data.Name}
                        height='150px'
                        width='auto'
                        />
                        <div><strong>Number: {index+1}</strong></div>
                    </div>
                )
                })
            }
        </div>
     );
}

export default Image_List;

// const object = [
//     {
//         'Name':'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
//         'id':'1',
//     },
//     {
//         'Name':'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80',
//         'id':'2',    
//     },
//     {
//         'Name':'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000',
//         'id':'3',
//     },
// ]