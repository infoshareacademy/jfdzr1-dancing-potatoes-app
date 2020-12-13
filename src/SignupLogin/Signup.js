import React, { useRef, useState } from "react";
import { Button, Card, CardContent } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
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
            <h2>Rejestracja</h2>
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
              <Form.Group id="password-confirm">
                <Form.Label>Powtórz hasło</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmationRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Button
                disabled={loading}
                variant="contained"
                color="primary"
                type="submit"
              >
                Zarejestruj się
              </Button>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
