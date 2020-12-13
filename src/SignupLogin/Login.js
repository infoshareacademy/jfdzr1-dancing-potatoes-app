import React, { useRef, useState } from "react";
import { Button, Card, CardContent } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      try {
        setError("")
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        history.push("/")
      } catch {
        setError("Failed to log in")
      }
      setLoading(false)
    }

  return (
    <>
      <div
        style={{
          maxWidth: "650px",
          display: "flex",
          flexDirection: "column",
          margin: "50px auto",
        }}
      >
        <Card>
          <CardContent>
            <h2>Zaloguj się</h2>
            {error && <Alert severity="error">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Hasło</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Button
                disabled={loading}
                variant="contained"
                color="primary"
                type="submit"
              >
                Zaloguj
              </Button>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
