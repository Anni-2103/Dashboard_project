import React from 'react';
import { BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/Chart.css';

const Chart = () => {
    const data = [
        {
            course: 'Web Development',
            progress: 75,
            performance: 85,
        },
        {
            course: 'UI & UX',
            progress: 60,
            performance: 75,
        },
        {
            course: 'App Development',
            progress: 80,
            performance: 70,
        },
        {
            course: 'Data Science',
            progress: 90,
            performance: 80,
        },
        {
            course: 'Machine Learning',
            progress: 70,
            performance: 90,
        },
        {
            course: 'BlockChain',
            progress: 65,
            performance: 85,
        },
        {
            course: 'Cloud computing',
            progress: 85,
            performance: 95,
        },
    ];

    return (
        <div className='charts'>
            <div className='chart-container'>
                <h3>Progress & Performance</h3>
                <ResponsiveContainer width='100%' height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='course' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey='progress' fill='#8884d8' name='Progress' />
                        <Bar dataKey='performance' fill='#82ca9d' name='Performance' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='chart-container'>
                <h3>Performance Trend</h3>
                <ResponsiveContainer width='100%' height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='course' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type='monotone' dataKey='performance' stroke='#82ca9d' name='Performance' />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Chart;
