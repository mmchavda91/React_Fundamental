import React from "react";
import { FavoritesProvider, useFavorites } from "./FavoritesContext";
import { UserProvider, useUser } from "./UserContext";

const restaurants = [
  { id: "rest-101", name: "The Green Table", cuisine: "Healthy bowls · Salad", rating: "4.5", time: "25 min" },
  { id: "rest-102", name: "Spice Route", cuisine: "North Indian · Biryani", rating: "4.3", time: "32 min" },
  { id: "rest-103", name: "Little Italy", cuisine: "Pizza · Italian", rating: "4.6", time: "28 min" },
];

function RestaurantFavoritesContent() {
  const user = useUser();
  const { favoriteIds, addFavorite, removeFavorite } = useFavorites();

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "32px 20px",
        background: "#f7f7f7",
        color: "#292929",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            borderBottom: "1px solid #e5e5e5",
            paddingBottom: "20px",
          }}
        >
          <div>
            <p style={{ margin: "0 0 6px", color: "#e23744", fontWeight: 700 }}>
              FOODIE / FAVORITES
            </p>
            <h1 style={{ margin: 0, fontSize: "28px" }}>Restaurants you love</h1>
          </div>
          <p style={{ margin: 0 }}>
            Hi, <strong>{user.name}</strong> · {favoriteIds.length} saved
          </p>
        </header>

        <section aria-label="Restaurants" style={{ display: "grid", gap: "12px", marginTop: "22px" }}>
          {restaurants.map((restaurant) => {
            const isFavorite = favoriteIds.includes(restaurant.id);

            return (
              <article
                key={restaurant.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "18px",
                  background: "#ffffff",
                  border: "1px solid #e8e8e8",
                  borderRadius: "6px",
                }}
              >
                <div>
                  <h2 style={{ margin: "0 0 6px", fontSize: "18px" }}>{restaurant.name}</h2>
                  <p style={{ margin: "0 0 8px", color: "#696969" }}>{restaurant.cuisine}</p>
                  <small style={{ color: "#696969" }}>
                    ★ {restaurant.rating} · {restaurant.time}
                  </small>
                </div>
                <button
                  type="button"
                  aria-label={`${isFavorite ? "Remove" : "Add"} ${restaurant.name} ${isFavorite ? "from" : "to"} favorites`}
                  aria-pressed={isFavorite}
                  onClick={() =>
                    isFavorite
                      ? removeFavorite(restaurant.id)
                      : addFavorite(restaurant.id)
                  }
                  style={{
                    minWidth: "44px",
                    minHeight: "44px",
                    border: "1px solid #e8e8e8",
                    borderRadius: "6px",
                    background: "#ffffff",
                    color: isFavorite ? "#e23744" : "#777777",
                    fontSize: "24px",
                    cursor: "pointer",
                  }}
                >
                  {isFavorite ? "♥" : "♡"}
                </button>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default function RestaurantFavorites() {
  return (
    <UserProvider>
      <FavoritesProvider>
        <RestaurantFavoritesContent />
      </FavoritesProvider>
    </UserProvider>
  );
}