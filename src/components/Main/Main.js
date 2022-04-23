import React, {useState} from 'react';
import Sidebar from "./Sidebar/Sidebar";
import UserTable from "./AdminPanel/UserTable";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Chairs from "./Board/Chairs";

function Main(props) {
    const [room, setRoom] = useState();
    const [availablePlaces, setAvailablePlaces] = useState(12);
    const [occupiedPlaces, setOccupiedPlaces] = useState(12);
    const [sumPlaces, setSumPlaces] = useState(12);
    const [selectedNum, setSelectedNum] = useState(12);
    const roomSelected = [{name: 'Piętro 1', id: '12'}, {name: 'Piętro 2', id: '123'},]
    const roomSelection = (e) => {
        setRoom(e.target.value);
    }
    return (
        <div className="main-wrapper">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="content">
                <div className="select-room">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Piętro</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Wybierz pokój"
                            onChange={(e) => roomSelection(e)}
                        >
                            {roomSelected.map(item =>
                                <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                            )
                            }
                        </Select>
                    </FormControl>
                </div>
                <section className="wrapper">
                  <Chairs/>
                </section>
                <div className="stats">
                    <div><p>{availablePlaces} miejsc wolnych</p></div>
                    <div><p>{occupiedPlaces} miejsc zajętych</p></div>
                    <div><p>{sumPlaces} miejsc w sumie</p></div>
                </div>
                <div className="stats confirm">
                    <div><p>{selectedNum} selected</p></div>
                    <div><button className="btn">Confirm rezerwation</button></div>
                </div>
            </div>
        </div>
    );
}

export default Main;
