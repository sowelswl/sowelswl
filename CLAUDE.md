# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a GitHub profile repository for creating a personal README.md that displays on the GitHub profile page. The repository follows GitHub's special naming convention where a repository with the same name as the username automatically displays its README.md as the profile page.

## Repository Structure
- `README.md` - Main profile content displayed on GitHub profile
- `assets/` - Images, GIFs, and other media files for the profile
- `.github/workflows/` - GitHub Actions for automated updates (if implemented)

## Development Guidelines

### Profile Content Updates
- Edit `README.md` directly to update profile content
- Use GitHub Flavored Markdown for formatting
- Include personal introduction, skills, projects, and contact information
- Consider adding dynamic elements like GitHub stats, activity graphs, or project showcases

### Media Assets
- Store images and media in `assets/` directory
- Optimize images for web (< 1MB recommended)
- Use relative paths when referencing assets in README.md

### GitHub Actions (if implemented)
- Automated profile updates should be configured in `.github/workflows/`
- Common automations include updating latest blog posts, GitHub stats, or project activity

## Testing Changes
- Use GitHub's preview feature when editing README.md
- Check formatting and links before committing
- View the live profile at https://github.com/sowelswl to verify changes

## Deployment
All changes are automatically live once pushed to the main branch. No build process required.