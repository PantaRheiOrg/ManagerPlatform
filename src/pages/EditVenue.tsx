/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import '../css/editVenue.css';
import VenueService from '../services/venue.service';
import { VenueDTO } from '../models/IVenue';

const EditVenue: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [venueData, setVenueData] = useState<VenueDTO | null>(null);
    // const [typeInputs, setTypeInputs] = useState<string[]>(['']);

    useEffect(() => {
        fetchVenueData();
    }, []);

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
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (venueData) {
            setVenueData({
                ...venueData,
                [name]: value,
            });
        }
    };
    const handleLocationChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const { name, value } = e.target;
        if (venueData) {
            const updatedLocations = [...venueData.locations]; // Create a copy of the locations array
            updatedLocations[index] = {
                ...updatedLocations[index],
                [name]: value,
            }; // Update the specific location at the given index
            setVenueData({
                ...venueData,
                locations: updatedLocations, // Update the locations array in the venueData state
            });
        }
    };
    const handleMenuChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const { name, value } = e.target;
        if (venueData) {
            const updatedMenus = [...venueData.menus]; // Create a copy of the menus array
            updatedMenus[index] = { ...updatedMenus[index], [name]: value }; // Update the specific menu at the given index
            setVenueData({
                ...venueData,
                menus: updatedMenus, // Update the menus array in the venueData state
            });
        }
    };

    const handleSubmit = async () => {
        const venueService = new VenueService();
        const venue: VenueDTO = await venueService.updateVenue(
            venueData!.venueId,
            venueData!
        );
        console.log(venue);
    };
    return (
        <div className="container">
            {loading ? (
                <div>
                    <p>Loading...</p>
                </div>
            ) : (
                <div>
                    <h2>Edit{venueData?.rating}</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={venueData?.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="picture">Picture:</label>
                            <input
                                type="text"
                                id="picture"
                                name="picture"
                                value={venueData?.picture}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="description">Description:</label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                value={venueData?.description}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="priceRating">Price Rating:</label>
                            <input
                                type="text"
                                id="priceRating"
                                name="priceRating"
                                value={venueData?.priceRating}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="rating">Rating:</label>
                            <input
                                type="text"
                                id="rating"
                                name="rating"
                                value={venueData?.rating}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="managerId">Manager ID:</label>
                            <input
                                type="number"
                                id="managerId"
                                name="managerId"
                                value={venueData?.managerId}
                                onChange={handleInputChange}
                            />
                        </div>
                        {/* Locations */}
                        <div>
                            <label htmlFor="latitude">Latitude:</label>
                            <input
                                type="number"
                                id="latitude"
                                name="latitude"
                                value={venueData?.locations[0].latitude}
                                onChange={(e) => handleLocationChange(e, 0)}
                            />
                        </div>
                        <div>
                            <label htmlFor="longitude">Longitude:</label>
                            <input
                                type="number"
                                id="longitude"
                                name="longitude"
                                value={venueData?.locations[0].longitude}
                                onChange={(e) => handleLocationChange(e, 0)}
                            />
                        </div>
                        <div>
                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={venueData?.locations[0].city}
                                onChange={(e) => handleLocationChange(e, 0)}
                            />
                        </div>
                        <div>
                            <label htmlFor="postalCode">Postal Code:</label>
                            <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                value={venueData?.locations[0].postalCode}
                                onChange={(e) => handleLocationChange(e, 0)}
                            />
                        </div>
                        <div>
                            <label htmlFor="country">Country:</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={venueData?.locations[0].country}
                                onChange={(e) => handleLocationChange(e, 0)}
                            />
                        </div>
                        <div>
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={venueData?.locations[0].address}
                                onChange={(e) => handleLocationChange(e, 0)}
                            />
                        </div>

                        {/* Menus */}
                        {venueData?.menus.map((menu, index) => (
                            <div key={index}>
                                <label htmlFor={`menuName${index}`}>
                                    Menu Name:
                                </label>
                                <input
                                    type="text"
                                    id={`menuName${index}`}
                                    name={`menuName${index}`}
                                    value={menu.name}
                                    onChange={(e) => handleMenuChange(e, index)}
                                />
                                <label htmlFor={`menuDescription${index}`}>
                                    Menu Description:
                                </label>
                                <input
                                    type="text"
                                    id={`menuDescription${index}`}
                                    name={`menuDescription${index}`}
                                    value={menu.description}
                                    onChange={(e) => handleMenuChange(e, index)}
                                />
                                <label htmlFor={`menuType${index}`}>
                                    Menu Type:
                                </label>
                                <input
                                    type="text"
                                    id={`menuType${index}`}
                                    name={`menuType${index}`}
                                    value={menu.type}
                                    onChange={(e) => handleMenuChange(e, index)}
                                />
                                {/* You can add more fields for each menu here */}
                            </div>
                        ))}

                        <button type="submit">Save Changes</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default EditVenue;
