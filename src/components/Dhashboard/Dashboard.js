
import React from "react";
import { Area, AreaChart, Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Dashboard = () => {
    const data = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401,
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500,
        },
        {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 67010,
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 40405,
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 50900,
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 61000,
        },
    ];

    return (
        <div className="container py-5">
            <div className="row text-center">
                <div className="col-md-6">
                    <h5
                        style={{ color: "rgb(44 36 205)", fontWeight: "bold" }}
                        className="text-center mb-4"
                    >
                        Month Wise Sell
                    </h5>
                    <LineChart width={400} height={250} data={data}>
                        <Line
                            type="monotone"
                            dataKey="sell"
                            stroke="#8884d8"
                            strokeWidth={2}
                        ></Line>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </div>
                <div className="col-md-6">
                    <h5
                        style={{ color: "rgb(44 36 205)", fontWeight: "bold" }}
                        className="text-center mb-4"
                    >
                        Investment VS Revenue
                    </h5>
                    <AreaChart width={400} height={250} data={data}>
                        <Area dataKey="sell" stroke="#8884d8"></Area>
                        <Area
                            type="monotone"
                            dataKey="investment"
                            stackId="1"
                            stroke="#8884d8"
                            fill="#8884d8"
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stackId="1"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                        />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </AreaChart>
                </div>
                <div className="col-md-6">
                    <h5
                        style={{ color: "rgb(44 36 205)", fontWeight: "bold" }}
                        className="text-center mt-5 mb-3"
                    >
                        Investment VS Revenue
                    </h5>
                    <BarChart width={400} height={250} data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
