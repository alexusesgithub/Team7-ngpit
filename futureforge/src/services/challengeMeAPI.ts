/**
 * Module 3: Challenge Me - API Service Layer
 * Handles all API calls to the backend
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// ============ Types ============

export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'AI/ML' | 'Full Stack' | 'Systems Design';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  team_size: string;
  skills: string[];
  mentors_assigned: number;
  featured: boolean;
  progress: number;
  created_at: string;
}

export interface Team {
  id: number;
  name: string;
  project_id: number;
  members_count: number;
  max_members: number;
  skills_required: string[];
  open_spots: number;
  status: 'Recruiting' | 'Full' | 'Completed';
  created_at: string;
}

export interface Discussion {
  id: number;
  title: string;
  content: string;
  category: string;
  author_id: number;
  author_name: string;
  replies_count: number;
  views: number;
  upvotes: number;
  is_recent: boolean;
  created_at: string;
}

export interface Mentor {
  id: number;
  name: string;
  role: string;
  expertise: string[];
  rating: number;
  reviews_count: number;
  availability: 'Available' | 'Booked' | 'On Leave';
  assigned_to_user: boolean;
}

export interface Internship {
  id: number;
  company: string;
  title: string;
  duration: string;
  commitment_hours: string;
  stipend: string;
  skills: string[];
  status: 'Open' | 'Closing Soon' | 'Closed';
  deadline_days: number;
  posted_at: string;
}

export interface Stats {
  total_projects: number;
  active_teams: number;
  total_discussions: number;
  available_mentors: number;
  open_internships: number;
}

// ============ Error Handling ============

class APIError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = 'APIError';
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
    throw new APIError(response.status, error.detail || response.statusText);
  }
  return response.json();
}

// ============ Projects API ============

export const projectsAPI = {
  async getAll(featuredOnly = false): Promise<Project[]> {
    const response = await fetch(`${API_BASE_URL}/projects?featured_only=${featuredOnly}`);
    return handleResponse<Project[]>(response);
  },

  async getById(id: number): Promise<Project> {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`);
    return handleResponse<Project>(response);
  },

  async join(projectId: number, userId: number): Promise<{ message: string; project_id: number }> {
    const response = await fetch(`${API_BASE_URL}/projects/${projectId}/join`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId })
    });
    return handleResponse(response);
  }
};

// ============ Teams API ============

export const teamsAPI = {
  async getAll(): Promise<Team[]> {
    const response = await fetch(`${API_BASE_URL}/teams`);
    return handleResponse<Team[]>(response);
  },

  async getById(id: number): Promise<Team> {
    const response = await fetch(`${API_BASE_URL}/teams/${id}`);
    return handleResponse<Team>(response);
  },

  async join(teamId: number, userId: number): Promise<{ message: string; team_id: number }> {
    const response = await fetch(`${API_BASE_URL}/teams/${teamId}/join`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId })
    });
    return handleResponse(response);
  },

  async create(teamData: { name: string; project_id: number; skills_required: string[]; max_members: number }): Promise<Team> {
    const response = await fetch(`${API_BASE_URL}/teams`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(teamData)
    });
    return handleResponse<Team>(response);
  }
};

// ============ Discussions API ============

export const discussionsAPI = {
  async getAll(category?: string): Promise<Discussion[]> {
    const url = category ? `${API_BASE_URL}/discussions?category=${category}` : `${API_BASE_URL}/discussions`;
    const response = await fetch(url);
    return handleResponse<Discussion[]>(response);
  },

  async getById(id: number): Promise<Discussion> {
    const response = await fetch(`${API_BASE_URL}/discussions/${id}`);
    return handleResponse<Discussion>(response);
  },

  async create(data: { title: string; content: string; category: string; author_id: number }): Promise<Discussion> {
    const response = await fetch(`${API_BASE_URL}/discussions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return handleResponse<Discussion>(response);
  },

  async upvote(id: number): Promise<{ upvotes: number }> {
    const response = await fetch(`${API_BASE_URL}/discussions/${id}/upvote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    return handleResponse(response);
  }
};

// ============ Mentors API ============

export const mentorsAPI = {
  async getAll(availability?: string): Promise<Mentor[]> {
    const url = availability ? `${API_BASE_URL}/mentors?availability=${availability}` : `${API_BASE_URL}/mentors`;
    const response = await fetch(url);
    return handleResponse<Mentor[]>(response);
  },

  async getById(id: number): Promise<Mentor> {
    const response = await fetch(`${API_BASE_URL}/mentors/${id}`);
    return handleResponse<Mentor>(response);
  },

  async requestMentorship(mentorId: number, userId: number): Promise<{ message: string; mentor_id: number }> {
    const response = await fetch(`${API_BASE_URL}/mentors/${mentorId}/request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId })
    });
    return handleResponse(response);
  }
};

// ============ Internships API ============

export const internshipsAPI = {
  async getAll(status?: string): Promise<Internship[]> {
    const url = status ? `${API_BASE_URL}/internships?status_filter=${status}` : `${API_BASE_URL}/internships`;
    const response = await fetch(url);
    return handleResponse<Internship[]>(response);
  },

  async getById(id: number): Promise<Internship> {
    const response = await fetch(`${API_BASE_URL}/internships/${id}`);
    return handleResponse<Internship>(response);
  },

  async apply(internshipId: number, userId: number): Promise<{ message: string; internship_id: number }> {
    const response = await fetch(`${API_BASE_URL}/internships/${internshipId}/apply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId })
    });
    return handleResponse(response);
  }
};

// ============ Stats API ============

export const statsAPI = {
  async getStats(): Promise<Stats> {
    const response = await fetch(`${API_BASE_URL.replace('/api', '')}/stats`);
    return handleResponse<Stats>(response);
  }
};

// ============ Health Check ============

export async function healthCheck(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL.replace('/api', '')}/health`);
    return response.ok;
  } catch {
    return false;
  }
}
