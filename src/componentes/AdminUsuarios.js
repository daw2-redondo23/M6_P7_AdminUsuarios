
export const adminUsuarios = {
    array: [
        {
            id: 1,
            nick: 'asdrf90',
            email: 'aefhefw4@gmail.com',
            pass: 'prueba343'
        },
        {
            id: 2,
            nick: 't3eor8',
            email: 'hjiw4fw@gmail.com',
            pass: 'pear349'
        }
    ],
    pintaTabla: ()=>{
        let html = `<table class="table table-striped" id="tabla">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nick</th>
                                <th>Email</th>
                               <th></th> 
                            </tr>
                        </thead>
                    </table>`            
        
     return html;
    },
    
}
