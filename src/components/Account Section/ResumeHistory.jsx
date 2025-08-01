import React, { useEffect, useState } from 'react';
import { Container, Spinner, Alert } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ResumeHistory = () => {
  const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        if (!isAuthenticated) {
          setError('You must be logged in to view your history.');
          setLoading(false);
          return;
        }

        const token = await getAccessTokenSilently({
          audience: 'https://naya-resume-api',
        });

        const res = await fetch(`${API_BASE_URL}/api/history`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Failed to fetch history');
        }

        const data = await res.json();
        setHistory(data.history || []);
      } catch (err) {
        console.error("❌ History fetch error:", err.message);
        setError(err.message || 'Failed to fetch history');
      } finally {
        setLoading(false);
      }
    };

    if (!isLoading) {
      fetchHistory();
    }
  }, [isAuthenticated, isLoading, getAccessTokenSilently]);

  return (
    <Container className="mt-5">
      <h2 className="fw-bold mb-4 text-center">Your Download History</h2>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : error ? (
        <Alert variant="danger" className="text-center">{error}</Alert>
      ) : history.length === 0 ? (
        <p className="text-muted text-center">You haven't downloaded any resumes yet.</p>
      ) : (
        <ul className="list-group shadow">
          {history.map((entry, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {entry.title || 'Downloaded Resume'}
              <span className="text-muted" style={{ fontSize: '0.9rem' }}>
                {new Date(entry.date).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default ResumeHistory;
