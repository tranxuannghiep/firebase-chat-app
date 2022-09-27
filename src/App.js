import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import ChatRoom from './components/ChatRoom/ChatRoom';
import Login from './components/Login/Login';
import { auth } from './firebase/config';
import { updateUser } from './redux/action/authAction';
function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const unsubcribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user
        dispatch(updateUser({ displayName, email, uid, photoURL }))
        setLoading(false)
        navigate("/")
        return;
      }
      setLoading(false)
      navigate("/login")
    })
    return () => unsubcribed()
  }, [navigate])
  if (loading) return <Spin />
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<ChatRoom />} />
    </Routes>
  );
}

export default App;
