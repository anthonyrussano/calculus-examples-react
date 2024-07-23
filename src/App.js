import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DerivativeExample = () => {
  const data = Array.from({ length: 100 }, (_, i) => ({
    x: i / 10 - 5,
    y: Math.pow(i / 10 - 5, 2),
    dy: 2 * (i / 10 - 5)
  }));

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Derivative Example: f(x) = x²</h2>
      <p>The derivative of f(x) = x² is f'(x) = 2x</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="y" stroke="#8884d8" name="f(x) = x²" />
          <Line type="monotone" dataKey="dy" stroke="#82ca9d" name="f'(x) = 2x" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const IntegralExample = () => {
  const data = Array.from({ length: 100 }, (_, i) => ({
    x: i / 10,
    y: Math.sin(i / 10)
  }));

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Integral Example: ∫sin(x)dx</h2>
      <p>The integral of sin(x) is -cos(x) + C</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="y" stroke="#8884d8" name="sin(x)" />
        </LineChart>
      </ResponsiveContainer>
      <p>The shaded area under the curve represents the integral.</p>
    </div>
  );
};

const CalcExamples = () => (
  <div className="space-y-8">
    <DerivativeExample />
    <IntegralExample />
  </div>
);

function App() {
  return (
    <div className="App">
      <h1>Calculus Examples</h1>
      <CalcExamples />
    </div>
  );
}

export default App;