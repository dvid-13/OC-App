const API = "http://bjgiiot.tk:3300/api";

export const getCount = async () => {
  const res = await fetch(`${API}/count`, {
    method: "GET",
  });
  return await res.json();
};

export const getActive = async () => {
  const res = await fetch(`${API}/getactive`, {
    method: "GET",
  });
  return await res.json();
};

export const getAll = async () => {
  const res = await fetch(`${API}/getall`, {
    method: "GET",
  });
  return await res.json();
};

export const getData = async (id) => {
  const res = await fetch(`${API}/getdata/${id}`, {
    method: "GET",
  });
  return await res.json();
};

export const saveOc = async (newOc) => {
  const res = await fetch(`${API}/saveoc`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(newOc),
  });
  return res.json();
};

export const saveData = async (newdata) => {
  const res = await fetch(`${API}/savedata`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(newdata),
  });
  return res.json();
};

export const deleteData = async (id) => {
  fetch(`${API}/${id}`, { method: "DELETE" });
};

export const updateState = async (id) => {
  const res = await fetch(`${API}/${id}`, { method: "PUT" });
  return res.json();
};

export const sendReport = async (id) => {
  const res = await fetch(`http://bjgiiot.tk:1880/report/${id}`, {
    method: "POST",
  });
  return res;
};
