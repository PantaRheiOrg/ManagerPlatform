/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import VenueService from '../../services/venue.service';
import { VenueDTO } from '../../models/IVenue';
import LocationInfo from '../locationInfo/locationInfo';
import MenuInfo from '../menuInfo/menuInfo';
import VenueInfo from '../venueInfo/venueInfo';
import '../../css/main.css'; // Import CSS file for custom styling

const Main: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [venueData, setVenueData] = useState<VenueDTO | null>(null);

    useEffect(() => {
        const fetchVenueData = async () => {
            try {
                if (localStorage.getItem('token')) {
                    const venueService = new VenueService();
                    const data = await venueService.getVenueByToken();
                    setVenueData(data);
                } else {
                    throw new Error('Token not found');
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching venue data:', error);
                setLoading(false);
            }
        };

        fetchVenueData();
    }, []);

    return (
        <div className="main-container">
            {loading ? (
                <div>Loading...</div>
            ) : venueData ? (
                <>
                    <h1 className="main-title">Welcome to {venueData.name}</h1>
                    <VenueInfo venueData={venueData} />
                    <div className="menu-section">
                        <h2 className="section-title">Menus</h2>
                        <div className="row">
                            {venueData.menus.map((menu, index) => (
                                <div className="col-md-6" key={index}>
                                    <MenuInfo menu={menu} index={index} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="location-section">
                        <h2 className="section-title">Location</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <LocationInfo venueData={venueData} />
                            </div>
                            <div className="col-md-6 text-center">
                                <iframe
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.3934870329613!2d${venueData.locations[0].longitude}!3d${venueData.locations[0].latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMjnCsDAwJzIyLjMiTiAxMMKwMzUnNTIuOCJX!5e0!3m2!1sen!2suk!4v1562879507387!5m2!1sen!2suk`}
                                    width="90%"
                                    height="100%"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div>No venue data available.</div>
            )}
        </div>
    );
};

export default Main;
