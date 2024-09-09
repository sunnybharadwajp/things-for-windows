<script>
	import { page } from '$app/stores';
</script>

<div class="sidebar">
	<div class="button-section">
		<a href="/inbox" class="sidebar-button" class:active={$page.url.pathname === '/inbox'}>
			<span class="sidebar-button-icon">
				<img src="/sidebar-icons/inbox.svg" alt="Inbox" />
			</span>
			<span class="sidebar-button-text">Inbox</span>
			<span class="sidebar-button-stats"></span>
		</a>
	</div>

	<div class="button-section">
		<a href="/today" class="sidebar-button" class:active={$page.url.pathname === '/today'}>
			<span class="sidebar-button-icon">
				<img src="/sidebar-icons/today.svg" alt="Today" />
			</span>
			<span class="sidebar-button-text">Today</span>
			<span class="sidebar-button-stats"></span>
		</a>
		<a href="/upcoming" class="sidebar-button" class:active={$page.url.pathname === '/upcoming'}>
			<span class="sidebar-button-icon">
				<img src="/sidebar-icons/upcoming.svg" alt="Upcoming" />
			</span>
			<span class="sidebar-button-text">Upcoming</span>
			<span class="sidebar-button-stats"></span>
		</a>
		<a href="/anytime" class="sidebar-button" class:active={$page.url.pathname === '/anytime'}>
			<span class="sidebar-button-icon">
				<img src="/sidebar-icons/anytime.svg" alt="Anytime" />
			</span>
			<span class="sidebar-button-text">Anytime</span>
			<span class="sidebar-button-stats"></span>
		</a>
		<a href="/someday" class="sidebar-button" class:active={$page.url.pathname === '/someday'}>
			<span class="sidebar-button-icon">
				<img src="/sidebar-icons/someday.svg" alt="Someday" />
			</span>
			<span class="sidebar-button-text">Someday</span>
			<span class="sidebar-button-stats"></span>
		</a>
	</div>

	<div class="button-section">
		<a href="/logbook" class="sidebar-button" class:active={$page.url.pathname === '/logbook'}>
			<span class="sidebar-button-icon">
				<img src="/sidebar-icons/logbook.svg" alt="Logbook" />
			</span>
			<span class="sidebar-button-text">Logbook</span>
			<span class="sidebar-button-stats"></span>
		</a>
		<a href="/trash" class="sidebar-button" class:active={$page.url.pathname === '/trash'}>
			<span class="sidebar-button-icon">
				<img src="/sidebar-icons/trash.svg" alt="Trash" />
			</span>
			<span class="sidebar-button-text">Trash</span>
			<span class="sidebar-button-stats"></span>
		</a>
	</div>
</div>

<style lang="scss">
	.sidebar {
		min-width: 240px;
		height: 100vh;
		padding-top: 14px;
		padding-left: 12px;
		padding-right: 12px;
		background-color: #f5f6f8;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.sidebar-button {
		width: 100%;
		border: none;
		background-color: transparent;
		cursor: pointer;
		text-align: left;
		padding: 4px 6px;
		border-radius: 4px;
		display: flex;
		align-items: center;
		gap: 6px;
		text-decoration: none;
		color: inherit;
		&:hover {
			background-color: #dde0e6;
		}
		&.active {
			background-color: #dde0e6;
		}
	}

	.sidebar-button-icon {
		flex-shrink: 0;
		height: 18px;
		width: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.sidebar-button-text {
		flex-grow: 1;
		font-weight: bold;
		line-height: 1;
	}

	.sidebar-button-stats {
		font-weight: bold;
		flex-shrink: 0;
		padding: 0 2px;
		display: flex;
		line-height: 1;
		align-items: center;
		justify-content: center;
	}

	.button-section {
		margin-bottom: 16px;
	}
</style>
