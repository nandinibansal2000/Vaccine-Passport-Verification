import React, {useState} from 'react'
import {Fab, TextareaAutosize} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import Modal from "react-modal";
import QrScan from 'react-qr-reader';
import PropTypes from "prop-types";
import * as FaIcons from "react-icons/fa";


if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

const customStyle = {
  content: {
    border: "none",
    maxWidth: "1000px",
    margin: "10px auto",
    padding: "10px 20px 0px",
    borderRadius: "8px",
  },
  overlay: { zIndex: "1001", backgroundColor: "rgba(52, 52, 52, 0.8)" },
};


export default function QRscanner({qrJsonData, setQrscan, isOpen, setOpen}) {

    const handleScan = data => {
        if (data) {
            console.log(data);
            setQrscan(data)
        }
    }
    const handleError = err => {
    console.error(err)
    }
    console.log(qrJsonData, setQrscan, "ss")

    return (
      <Modal isOpen={isOpen} style={customStyle}>
          <button
            onClick={setOpen}
            style={{
            position: "absolute",
            border: "none",
            top: "20px",
            right: "20px",
            cursor: "pointer",
            padding: "3px",
            }}
          >
          <FaIcons.FaTimes />
          </button>
        <div>
                <span>Scan QR to Verify</span>
                
                <center>
                <div style={{marginTop:30}}>
                    <QrScan
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ height: 240, width: 320 }}
                    />
                </div>
                </center>
        </div>
      </Modal>
    );
  }
  
  