import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import Avatar from "./Avatar";

export default function Account({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="max-w-xl mx-auto p-6">
      <Avatar
        uid={user.id}
        url={avatar_url}
        size={150}
        onUpload={(url) => {
          setAvatarUrl(url);
          updateProfile({ username, website, avatar_url: url });
        }}
      />
      <div className="my-6">
        <label htmlFor="email" className="text-base font-medium text-gray-900">
          Email
        </label>
        <input
          id="email"
          type="text"
          value={user.email}
          className="block w-full my-2 py-4 px-4 text-slate-400 cursor-not-allowed placeholder-gray-500 transition-all duration-200 bg-grey border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
          disabled
        />
      </div>
      <div className="my-6">
        <label
          htmlFor="username"
          className="text-base font-medium text-gray-900"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username || ""}
          className="block w-full my-2 py-4 px-4 text-black cursor-pointer placeholder-gray-500 transition-all duration-200 bg-grey border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="my-6">
        <label
          htmlFor="website"
          className="text-base font-medium text-gray-900"
        >
          Website
        </label>
        <input
          id="website"
          type="website"
          value={website || ""}
          className="block w-full my-2 py-4 px-4 text-black cursor-pointer placeholder-gray-500 transition-all duration-200 bg-grey border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="flex my-5 max-w-full">
        <button
          className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold leading-5 transition-all duration-200 bg-orange-300 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 hover:bg-red-500 text-black"
          onClick={() => updateProfile({ username, website, avatar_url })}
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>
    </form>
  );
}
