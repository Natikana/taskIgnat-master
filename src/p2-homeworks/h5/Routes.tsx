import React from 'react'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    SUPER_JUNIOR: '/super-junior',
    ERROR404: '/error404'
    /// add paths
}

function MyRoutes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            {/*<Routes>

            в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR
            exact нужен чтоб указать полное совподение (что после '/' ничего не будет)
            <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}  />
            <Route path={PATH.JUNIOR} element={<Junior/>}/>
            <Route path={PATH.SUPER_JUNIOR} element={<Super_junior/>}/>
                /// add routes

            у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
            <Route path={PATH.ERROR404} element={<Error404/>}/>

            </Routes>*/}
        </div>
    )
}

export default MyRoutes
