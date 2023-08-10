import React, { useState, useEffect } from "react";
import "./selection.css";
function RoomSelectionForm() {
  const [selectedRooms, setSelectedRooms] = useState([]);

  const handleCheckboxChange = (idx) => {
    const newSelectedRooms = [...selectedRooms];

    if (!newSelectedRooms.includes(idx)) {
      for (let i = idx; i >= 0; i--) {
        newSelectedRooms.push(i);
      }
    } else {
      const indexToRemove = newSelectedRooms.indexOf(idx);

      newSelectedRooms.splice(
        indexToRemove,
        newSelectedRooms.length - indexToRemove
      );
    }

    setSelectedRooms(newSelectedRooms);
  };

  useEffect(() => {
    // Update any logic here that depends on selectedRooms
  }, [selectedRooms]);

  return (
    <div className="container">
      {
        <div className="container">
          <div className="room">
            <div className="title-container">
              {/*       <input type="checkbox" class="check"> */}

              <h5 className="title" id="default">
                Room 1
              </h5>
            </div>

            <section className="dropdown-container">
              <div className="column">
                <span className="label">
                  Adults
                  <br />
                  (18 +)
                </span>

                <select name="adults" className="default-dropdown">
                  <option value={0}>0</option>

                  <option value={1}>1</option>

                  <option value={2}>2</option>
                </select>
              </div>

              <div className="column">
                <span className="label">
                  Children
                  <br />
                  (0 - 17)
                </span>

                <select name="children" className="default-dropdown">
                  <option value={0}>0</option>

                  <option value={1}>1</option>

                  <option value={2}>2</option>
                </select>
              </div>
            </section>
          </div>

          <div className="room">
            <div className="title-container">
              <input type="checkbox" className="check" />

              <h5 className="title">Room 2</h5>
            </div>

            <section className="dropdown-container">
              <div className="column">
                <span className="label">
                  Adults
                  <br />
                  (18 +)
                </span>

                <select name="adults" className="dropdown">
                  <option value={0}>0</option>

                  <option value={1}>1</option>

                  <option value={2}>2</option>
                </select>
              </div>

              <div className="column">
                <span className="label">
                  Children
                  <br />
                  (0 - 17)
                </span>

                <select name="children" className="dropdown">
                  <option value={0}>0</option>

                  <option value={1}>1</option>

                  <option value={2}>2</option>
                </select>
              </div>
            </section>
          </div>

          <div className="room">
            <div className="title-container">
              <input type="checkbox" className="check" />

              <h5 className="title">Room 3</h5>
            </div>

            <section className="dropdown-container">
              <div className="column">
                <span className="label">
                  Adults
                  <br />
                  (18 +)
                </span>

                <select name="adults" className="dropdown">
                  <option value={0}>0</option>

                  <option value={1}>1</option>

                  <option value={2}>2</option>
                </select>
              </div>

              <div className="column">
                <span className="label">
                  Children
                  <br />
                  (0 - 17)
                </span>

                <select name="children" className="dropdown">
                  <option value={0}>0</option>

                  <option value={1}>1</option>

                  <option value={2}>2</option>
                </select>
              </div>
            </section>
          </div>

          <div className="room">
            <div className="title-container">
              <input type="checkbox" className="check" />

              <h5 className="title">Room 4</h5>
            </div>

            <section className="dropdown-container">
              <div className="column">
                <span className="label">
                  Adults
                  <br />
                  (18 +)
                </span>

                <select name="adults" className="dropdown">
                  <option value={0}>0</option>

                  <option value={1}>1</option>

                  <option value={2}>2</option>
                </select>
              </div>

              <div className="column">
                <span className="label">
                  Children
                  <br />
                  (0 - 17)
                </span>

                <select name="children" className="dropdown">
                  <option value={0}>0</option>

                  <option value={1}>1</option>

                  <option value={2}>2</option>
                </select>
              </div>
            </section>
          </div>
        </div>
      }
    </div>
  );
}

export default RoomSelectionForm;
