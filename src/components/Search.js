import React, {useContext, useState}  from 'react'
import GithubContext from '../context/github/githubContext'
import AlertContext from '../context/alert/alertContext'


const Search = () => {

    const {searchUsers,clearUsers,users} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)

    const [keyword,setKeyword] = useState ('');

  const onChange = (e) =>{
        setKeyword(e.target.value)
    }

  const onSubmit = (e) => {
        e.preventDefault();

        if(keyword ===""){
            setAlert("Lütfen Anahtar Kelime Giriniz","danger")
        }else{
            searchUsers(keyword);
            setKeyword('');
        }


    }
        return (

            <div className="container my-3">
                <form onSubmit={onSubmit}>
                    <div className="container my-3">
                        <div className="input-group">
                            <input type="text" value={keyword} onChange={onChange} className="form-control" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </div>
                    {users.length > 0 &&    <button onClick = {clearUsers}  className="btn btn-secondary btn-sm mt-2 mr-5">Sonuçları Temizle</button>}
                 
                </form>
               
            </div>
        )

}

export default Search
